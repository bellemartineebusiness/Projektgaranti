'use client'

import { useState, useEffect, startTransition } from 'react'
import Link from 'next/link'
import { FaShieldAlt, FaTimes, FaChevronDown } from 'react-icons/fa'

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

// ---------------------------------------------------------------------------
// Cookie category definitions
// ---------------------------------------------------------------------------
const CATEGORIES = [
  {
    id: 'necessary',
    name: 'Nödvändiga cookies',
    alwaysOn: true,
    inUse: true,
    description:
      'Dessa cookies krävs för att webbplatsen ska fungera korrekt och kan inte inaktiveras. De lagrar ingen personligt identifierbar information.',
    cookies: [
      {
        name: 'cookie_consent',
        purpose: 'Sparar ditt val av cookieinställningar',
        duration: '365 dagar',
      },
    ],
  },
  {
    id: 'analytics',
    name: 'Analyscookies',
    alwaysOn: false,
    inUse: false,
    description:
      'Hjälper oss att förstå hur besökare interagerar med webbplatsen genom att samla in anonym statistik. Används för tillfället inte.',
    cookies: [],
  },
  {
    id: 'marketing',
    name: 'Marknadsföringscookies',
    alwaysOn: false,
    inUse: false,
    description:
      'Används för att visa relevanta annonser och mäta kampanjresultat. Används för tillfället inte.',
    cookies: [],
  },
] as const

// ---------------------------------------------------------------------------
// Toggle visual component
// ---------------------------------------------------------------------------
function Toggle({ active, locked }: { active: boolean; locked?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full transition-colors duration-200 ${
        locked ? 'cursor-not-allowed opacity-80' : ''
      } ${active ? 'bg-primary' : 'bg-gray-300'}`}
    >
      <span
        className={`my-1 inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${
          active ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [openCategories, setOpenCategories] = useState<string[]>([])

  useEffect(() => {
    // Read from the browser cookie store (external system) via a transition
    // to avoid synchronous setState in the effect body.
    startTransition(() => {
      const stored = getStoredConsent()
      if (!stored || stored.version !== CONSENT_VERSION) {
        clearConsentCookie()
        setVisible(true)
      }
    })

    // "Hantera cookies" button in the footer fires this event
    const handler = () => {
      setVisible(true)
      setShowSettings(true)
    }
    window.addEventListener('openCookieSettings', handler)
    return () => window.removeEventListener('openCookieSettings', handler)
  }, [])

  const saveConsent = (status: ConsentStatus) => {
    setConsentCookie(status)
    setVisible(false)
    setShowSettings(false)
    setOpenCategories([])
  }

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  if (!visible) return null

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Settings modal                                                       */}
      {/* ------------------------------------------------------------------ */}
      {showSettings && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-sm"
            onClick={() => setShowSettings(false)}
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Cookieinställningar"
            className="fixed inset-x-4 top-1/2 z-[101] mx-auto max-w-lg -translate-y-1/2 flex max-h-[88vh] flex-col rounded-2xl bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <FaShieldAlt className="text-primary" size={16} />
                </div>
                <h2 className="text-lg font-bold text-gray-800">Cookieinställningar</h2>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="rounded p-1 text-gray-400 transition-colors hover:text-gray-600"
                aria-label="Stäng"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <p className="mb-5 text-sm leading-relaxed text-gray-600">
                Vi respekterar din integritet. Välj vilka cookies du tillåter nedan. Nödvändiga
                cookies krävs alltid för att sidan ska fungera och kan inte stängas av. Läs mer i
                vår{' '}
                <Link
                  href="/integritetspolicy"
                  className="text-primary underline hover:text-primary-dark"
                >
                  integritetspolicy &amp; cookiepolicy
                </Link>
                .
              </p>

              <div className="space-y-3">
                {CATEGORIES.map((cat) => {
                  const isOpen = openCategories.includes(cat.id)
                  return (
                    <div
                      key={cat.id}
                      className="overflow-hidden rounded-xl border border-gray-200"
                    >
                      {/* Category header row */}
                      <button
                        type="button"
                        onClick={() => toggleCategory(cat.id)}
                        className="flex w-full items-center justify-between bg-gray-50 px-4 py-3.5 text-left transition-colors hover:bg-gray-100"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-3">
                          <Toggle active={cat.alwaysOn || cat.inUse} locked={cat.alwaysOn} />
                          <span className="text-sm font-semibold text-gray-800">{cat.name}</span>
                          {cat.alwaysOn && (
                            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                              Alltid aktiv
                            </span>
                          )}
                          {!cat.alwaysOn && !cat.inUse && (
                            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">
                              Används ej
                            </span>
                          )}
                        </div>
                        <FaChevronDown
                          size={13}
                          className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Expandable detail */}
                      {isOpen && (
                        <div className="bg-white px-4 py-4 text-sm text-gray-600">
                          <p className="mb-3 leading-relaxed">{cat.description}</p>
                          {cat.cookies.length > 0 ? (
                            <div className="overflow-x-auto">
                              <table className="w-full border-collapse text-xs">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">
                                      Cookie
                                    </th>
                                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">
                                      Syfte
                                    </th>
                                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">
                                      Varaktighet
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {cat.cookies.map((c) => (
                                    <tr key={c.name}>
                                      <td className="border border-gray-200 px-3 py-2 font-mono">
                                        {c.name}
                                      </td>
                                      <td className="border border-gray-200 px-3 py-2">
                                        {c.purpose}
                                      </td>
                                      <td className="border border-gray-200 px-3 py-2">
                                        {c.duration}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          ) : (
                            <p className="text-xs italic text-gray-400">
                              Inga cookies i den här kategorin används för tillfället.
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Footer buttons */}
            <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-5 sm:flex-row">
              <button
                type="button"
                onClick={() => saveConsent('necessary')}
                className="flex-1 rounded-lg border-2 border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50"
              >
                Spara mina val
              </button>
              <button
                type="button"
                onClick={() => saveConsent('accepted')}
                className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Acceptera alla
              </button>
            </div>
          </div>
        </>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Bottom banner (shown when settings modal is NOT open)               */}
      {/* ------------------------------------------------------------------ */}
      {!showSettings && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Cookiemeddelande"
          className="fixed bottom-0 left-0 right-0 z-[100] border-t border-white/10 bg-dark-bg text-white shadow-2xl"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
              <div className="flex-1">
                <p className="mb-1 text-base font-semibold">🍪 Vi använder cookies</p>
                <p className="text-sm leading-relaxed text-gray-300">
                  Vi använder nödvändiga cookies för att sidan ska fungera. Med ditt samtycke kan vi
                  även använda analys- och marknadsföringscookies för att förbättra upplevelsen. Läs
                  mer i vår{' '}
                  <Link
                    href="/integritetspolicy"
                    className="text-primary-light underline transition-colors hover:text-white"
                  >
                    cookiepolicy
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-shrink-0 flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className="rounded-lg border border-gray-500 px-4 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10"
                >
                  Inställningar
                </button>
                <button
                  type="button"
                  onClick={() => saveConsent('necessary')}
                  className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
                >
                  Endast nödvändiga
                </button>
                <button
                  type="button"
                  onClick={() => saveConsent('accepted')}
                  className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Acceptera alla
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
