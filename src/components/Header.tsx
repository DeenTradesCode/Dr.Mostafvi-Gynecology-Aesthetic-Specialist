'use client'

import { useState } from 'react'
import Link from 'next/link'
import CTAButton from './CTAButton'
import SearchBar from './SearchBar'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Gynecology', href: '/gynecology' },
    { name: 'Aesthetics', href: '/aesthetics' },
    { name: 'Cosmetic Gyn', href: '/cosmetic-gyn' },
    { name: 'Insurance', href: '/insurance-faqs' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-serif font-bold text-ink">
              Dr. Mostafavi
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-ink hover:text-accent transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Search & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <SearchBar />
            <CTAButton
              variant="primary"
              size="sm"
              href="https://patientportal.advancedmd.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Appointment
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-6 w-6 text-ink"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="space-y-4">
              {/* Mobile Search */}
              <SearchBar />
              
              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-ink hover:text-accent hover:bg-accent-2 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="pt-4">
                <CTAButton
                  variant="primary"
                  size="md"
                  href="https://patientportal.advancedmd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  Book Appointment
                </CTAButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
