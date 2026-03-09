'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type ConsentStatus = 'accepted' | 'necessary' | null

const CONSENT_KEY = 'cookie_consent'
const CONSENT_VERSION = '1'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      setVisible(true)
    } else {
      try {
        const parsed = JSON.parse(stored)
        if (parsed.version !== CONSENT_VERSION) {
          setVisible(true)
        }
      } catch {
        setVisible(true)
      }
    }
  }, [])

  const saveConsent = (status: ConsentStatus) => {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ status, version: CONSENT_VERSION, date: new Date().toISOString() })
    )
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookiemedgivande"
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
              className="px-5 py-2.5 rounded-lg border border-gray-500 text-gray-300 text-sm font-medium hover:border-gray-300 hover:text-white transition-colors"
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
