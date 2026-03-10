'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from 'react-icons/fa'
import { getStoredConsent } from '@/components/CookieBanner'

function useConsentAccepted() {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    const check = () => {
      const stored = getStoredConsent()
      setAccepted(stored?.status === 'accepted')
    }
    check()
    window.addEventListener('cookieConsentChanged', check)
    return () => window.removeEventListener('cookieConsentChanged', check)
  }, [])

  return accepted
}

export default function Contact() {
  const [formData, setFormData] = useState({
    namn: '',
    email: '',
    telefon: '',
    meddelande: '',
    gdprConsent: false,
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const consentAccepted = useConsentAccepted()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.error ?? 'Något gick fel. Försök igen.')
        return
      }

      setStatus('success')
      setFormData({ namn: '', email: '', telefon: '', meddelande: '', gdprConsent: false })
      setTimeout(() => setStatus('idle'), 8000)
    } catch (error) {
      console.error('Contact form submission error:', error)
      setStatus('error')
      setErrorMsg('Nätverksfel. Kontrollera din anslutning och försök igen.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  return (
    <section id="kontakt" className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Kontakta oss
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Ta kontakt för en kostnadsfri konsultation och offert på ditt projekt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Kontaktinformation</h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaUser className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Joacim Lind</p>
                  <p className="text-secondary">Ansvarig Fastighet</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-secondary text-sm mb-1">Telefon</p>
                  <a
                    href="tel:+46707401383"
                    className="text-gray-800 font-semibold hover:text-primary transition-colors text-lg"
                  >
                    +46 70 740 1383
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-secondary text-sm mb-1">E-post</p>
                  <a
                    href="mailto:info@projektgarantiab.se"
                    className="text-gray-800 font-semibold hover:text-primary transition-colors text-lg"
                  >
                    info@projektgarantiab.se
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-secondary text-sm mb-1">Adress</p>
                  <p className="text-gray-800 font-semibold">Ekerövägen 51</p>
                  <p className="text-gray-800 font-semibold">178 37 Ekerö</p>
                </div>
              </div>
            </div>

            {/* Google Maps embed – only loaded after cookie consent */}
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                {consentAccepted ? (
                  <iframe
                    title="Projektgaranti Stockholm AB - Karta"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.123456!2d17.814!3d59.278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7da4a8b0c0ab%3A0x1!2sEker%C3%B6v%C3%A4gen+51%2C+178+37+Eker%C3%B6%2C+Sverige!5e0!3m2!1ssv!2sse!4v1700000000000!5m2!1ssv!2sse"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-center px-4">
                    <FaMapMarkerAlt size={28} className="text-gray-400 mb-3" />
                    <p className="text-sm text-gray-600 mb-3">
                      Kartan laddas inte utan ditt samtycke till cookies.
                    </p>
                    <button
                      onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
                      className="text-sm text-primary underline hover:text-primary-dark transition-colors"
                    >
                      Hantera cookieinställningar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Skicka ett meddelande</h3>

            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-xl mb-6 font-medium">
                ✓ Tack! Ditt meddelande har skickats. Vi återkommer inom kort.
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl mb-6">
                ✗ {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="namn" className="block text-sm font-semibold text-gray-700 mb-2">
                  Namn <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="namn"
                  name="namn"
                  required
                  value={formData.namn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Ditt namn"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-post <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="din@email.se"
                />
              </div>

              <div>
                <label htmlFor="telefon" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+46 70 000 0000"
                />
              </div>

              <div>
                <label htmlFor="meddelande" className="block text-sm font-semibold text-gray-700 mb-2">
                  Meddelande <span className="text-primary">*</span>
                </label>
                <textarea
                  id="meddelande"
                  name="meddelande"
                  required
                  rows={5}
                  value={formData.meddelande}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Berätta om ditt projekt..."
                />
              </div>

              {/* GDPR Consent */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="gdprConsent"
                  name="gdprConsent"
                  required
                  checked={formData.gdprConsent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 flex-shrink-0 accent-primary"
                />
                <label htmlFor="gdprConsent" className="text-sm text-gray-600 leading-relaxed">
                  Jag godkänner att Projektgaranti Stockholm AB behandlar mina personuppgifter för
                  att besvara min förfrågan. Läs mer i vår{' '}
                  <Link
                    href="/integritetspolicy"
                    className="text-primary underline hover:text-primary-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    integritetspolicy
                  </Link>
                  . <span className="text-primary">*</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors duration-200 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Skickar...' : 'Skicka meddelande'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
