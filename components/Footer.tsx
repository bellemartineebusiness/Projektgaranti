import Image from 'next/image'
import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import ManageCookiesButton from '@/components/ManageCookiesButton'

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start">
            <Image
              src="/logo-horizontal-gray.svg"
              alt="Projektgaranti Stockholm AB"
              width={200}
              height={36}
              className="h-9 w-auto mb-3"
            />
            </div>
            <p className="text-gray-400 text-sm mt-1 leading-relaxed">
              Professionell renovering i Stockholmsområdet med kvalitetsgaranti och ROT-avdrag.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold mb-4 text-gray-200">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+46707401383"
                  className="inline-flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <FaPhone size={14} />
                  +46 70 740 1383
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@projektgarantiab.se"
                  className="inline-flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <FaEnvelope size={14} />
                  info@projektgarantiab.se
                </a>
              </li>
              <li>
                <div className="inline-flex items-start gap-3 text-gray-400 text-sm">
                  <FaMapMarkerAlt size={14} className="mt-0.5 flex-shrink-0" />
                  <span>Ekerövägen 51, 178 37 Ekerö</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold mb-4 text-gray-200">Tjänster</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Badrumsrenovering</li>
              <li>Köksrenovering</li>
              <li>Totalrenovering</li>
              <li>Målning</li>
              <li>Golvläggning</li>
              <li>ROT-avdrag</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-sm">
          <div className="text-center sm:text-left">
            <p>© 2026 Projektgaranti Stockholm AB. Alla rättigheter förbehållna.</p>
            {/* TODO: Ersätt 559XXXXX-XXXX med faktiskt organisationsnummer innan publicering */}
            <p className="mt-1">Org.nr: 559XXXXX-XXXX &nbsp;|&nbsp; Innehar F-skattsedel &nbsp;|&nbsp; Innehar ROT-tillstånd</p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/integritetspolicy"
              className="hover:text-gray-300 transition-colors underline underline-offset-2"
            >
              Integritetspolicy &amp; Cookiepolicy
            </Link>
            <ManageCookiesButton />
          </div>
        </div>
      </div>
    </footer>
  )
}
