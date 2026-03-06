'use client'

import { FaChevronDown } from 'react-icons/fa'

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
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Brand name */}
        <div className="mb-8">
          <div className="inline-block border-2 border-primary px-6 py-3 mb-6">
            <span className="text-white text-sm sm:text-base font-bold tracking-widest uppercase">
              Projektgaranti Stockholm AB
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Professionell renovering i{' '}
          <span className="text-primary">Stockholmsområdet</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-4">
          Med garanti och ROT-avdrag
        </p>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Erfarna hantverkare för badrum, kök och totalrenovering. Vi levererar kvalitet du kan lita på.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('kontakt')}
            className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors duration-200 shadow-lg"
          >
            Kontakta oss
          </button>
          <button
            onClick={() => scrollToSection('tjanster')}
            className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transition-colors duration-200"
          >
            Våra tjänster
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('om-oss')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70 hover:opacity-100 transition-opacity animate-bounce"
        aria-label="Scroll down"
      >
        <FaChevronDown size={28} />
      </button>
    </section>
  )
}
