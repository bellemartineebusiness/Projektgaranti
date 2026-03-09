'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { href: '#hem', label: 'Hem' },
  { href: '#om-oss', label: 'Om oss' },
  { href: '#tjanster', label: 'Tjänster' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hem')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const sections = ['hem', 'om-oss', 'tjanster', 'kontakt']
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="flex items-center justify-between h-24 sm:h-32 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0"
            aria-label="Projektgaranti Stockholm AB – Till startsidan"
          >
            <Image
              src="/logo-horizontal-red.svg"
              alt="Projektgaranti Stockholm AB"
              width={400}
              height={80}
              className="h-20 sm:h-28 lg:h-32 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-medium text-sm transition-colors duration-200 hover:text-primary ${
                    activeSection === id ? 'text-primary border-b-2 border-primary' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
            <button
              onClick={() => handleNavClick('#kontakt')}
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              Få offert
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left px-3 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-50 hover:text-primary ${
                    activeSection === id ? 'text-primary bg-red-50' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
            <button
              onClick={() => handleNavClick('#kontakt')}
              className="block w-full text-center bg-primary text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mt-2"
            >
              Få offert
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
