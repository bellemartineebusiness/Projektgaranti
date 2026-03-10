'use client'

import { FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hem"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #1a1a2e 100%)',
      }}
    >
      {/* Decorative overlay */}
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

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto mt-16 sm:mt-20">
        {/* Brand logo */}
        <div className="mb-6 sm:mb-8">
          <Image
            src="/logo-vertical-red.svg"
            alt="Projektgaranti Stockholm AB"
            width={300}
            height={200}
            priority
            className="mx-auto w-52 sm:w-72 md:w-96"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
          Professionell renovering i{' '}
          <span className="text-primary">Stockholmsområdet</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3">
          Med garanti och ROT-avdrag
        </p>
        <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
          Erfarna hantverkare för badrum, kök och totalrenovering. Vi levererar kvalitet du kan lita på.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={() => scrollToSection('kontakt')}
            className="bg-primary text-white px-8 py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-dark transition-colors duration-200 shadow-lg"
          >
            Kontakta oss
          </button>
          <button
            onClick={() => scrollToSection('tjanster')}
            className="bg-transparent text-white px-8 py-4 rounded-lg text-base sm:text-lg font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transition-colors duration-200"
          >
            Våra tjänster
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('om-oss')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 group flex flex-col items-center gap-2 text-white opacity-75 hover:opacity-100 transition-all duration-300"
        aria-label="Scroll down"
      >
        <span aria-hidden="true" className="text-xs tracking-[0.25em] uppercase font-light select-none">
          Scroll
        </span>
        <div className="relative w-12 h-12 rounded-full border-2 border-white/60 group-hover:border-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <div className="flex flex-col items-center -space-y-1 motion-safe:animate-bounce">
            <FaChevronDown size={12} className="opacity-60" />
            <FaChevronDown size={14} />
          </div>
        </div>
      </button>
    </section>
  )
}