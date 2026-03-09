'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <Link href="/" className="flex items-center">
            <Image
              src="/logo-horizontal-red.svg"
              alt="Projektgaranti Stockholm AB"
              width={400}
              height={120}
              priority
              unoptimized
              style={{ height: '48px', width: 'auto' }}
            />
          </Link>

          <nav className="hidden items-center gap-10 text-sm font-medium text-gray-800 md:flex">
            <a href="#hem" className="transition hover:text-red-600">
              Hem
            </a>
            <a href="#om-oss" className="transition hover:text-red-600">
              Om oss
            </a>
            <a href="#tjanster" className="transition hover:text-red-600">
              Tjänster
            </a>
            <a href="#kontakt" className="transition hover:text-red-600">
              Kontakt
            </a>
          </nav>

        </div>
      </div>
    </header>
  )
}