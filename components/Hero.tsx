'use client'

import { FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hem"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32"
      style={{
        background:
          'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #1a1a2e 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(178, 58, 72, 0.1) 40px,
            rgba(178, 58, 72, 0.1) 80px
          )`,
        }}
      />

      <div className="relative z-10 mx-auto mt-20 max-w-4xl px-4 text-center sm:px-6 md:mt-28">
        
        {/* Större logo */}
        <div className="mb-8">
          <Image
            src="/logo-vertical-red.svg"
            alt="Projektgaranti Stockholm AB"
            width={420}
            height={280}
            priority
            className="mx-auto w-72 sm:w-96 md:w-[420px]"
          />
        </div>

        <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Professionell renovering i{' '}
          <span className="text-primary">Stockholmsområdet</span>
        </h1>

        <p className="mb-3 text-lg text-gray-300 sm:text-xl md:text-2xl">
          Med garanti och ROT-avdrag
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-base text-gray-400 sm:text-lg">
          Erfarna hantverkare för badrum, kök och totalrenovering. Vi levererar kvalitet du kan lita på.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollToSection('kontakt')}
            className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-primary-dark sm:text-lg"
          >
            Kontakta oss
          </button>

          <button
            onClick={() => scrollToSection('tjanster')}
            className="rounded-lg border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-gray-900 sm:text-lg"
          >
            Våra tjänster
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('om-oss')}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white"
        aria-label="Nedåt"
      >
        <FaChevronDown
          size={28}
          className="animate-bounce opacity-90 transition hover:opacity-100"
        />
      </button>
    </section>
  )
}