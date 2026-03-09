'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

export type ConsentStatus = 'accepted' | 'necessary'

const CONSENT_COOKIE = 'cookie_consent'
const CONSENT_VERSION = '2'
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60 // 365 days in seconds

export function getStoredConsent(): { status: ConsentStatus; version: string } | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(/(^|;\s*)cookie_consent=([^;]+)/)
  if (!match) return null
  try {
    return JSON.parse(decodeURIComponent(match[2]))
  } catch {
    return null
  }
}

function setConsentCookie(status: ConsentStatus) {
  const value = encodeURIComponent(
    JSON.stringify({ status, version: CONSENT_VERSION, date: new Date().toISOString() })
  )
  document.cookie = `${CONSENT_COOKIE}=${value}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Strict; Secure`
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: { status } }))
}

function clearConsentCookie() {
  document.cookie = `${CONSENT_COOKIE}=; max-age=0; path=/; SameSite=Strict; Secure`
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  const checkConsent = useCallback(() => {
    const stored = getStoredConsent()
    if (!stored || stored.version !== CONSENT_VERSION) {
      clearConsentCookie()
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    checkConsent()
    const handler = () => setVisible(true)
    window.addEventListener('openCookieSettings', handler)
    return () => window.removeEventListener('openCookieSettings', handler)
  }, [checkConsent])

  const saveConsent = (status: ConsentStatus) => {
    setConsentCookie(status)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookieinställningar"
      className="fixed bottom-0 left-0 right-0 z-[100] bg-dark-bg text-white shadow-2xl"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex-1">
            <p className="font-semibold text-base mb-1">Vi använder cookies 🍪</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Vi använder nödvändiga cookies för att webbplatsen ska fungera korrekt. Inga
              spårnings- eller marknadsföringscookies används utan ditt godkännande. Läs mer i vår{' '}
              <Link
                href="/integritetspolicy"
                className="text-primary-light underline hover:text-white transition-colors"
              >
                integritetspolicy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={() => saveConsent('necessary')}
              className="px-5 py-2.5 rounded-lg border border-gray-300 text-white text-sm font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Endast nödvändiga
            </button>
            <button
              onClick={() => saveConsent('accepted')}
              className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              Acceptera alla
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
