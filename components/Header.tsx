'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import SearchBar from './SearchBar'

const navigation = [
  { name: 'Gynecology', href: '/gynecology' },
  { name: 'Aesthetics', href: '/aesthetics' },
  { name: 'Cosmetic Gyn', href: '/cosmetic-gyn' },
  { name: 'Insurance & FAQs', href: '/insurance-faqs' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl container-padding" aria-label="Global">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 font-semibold text-xl text-primary-600">
              Dr. Mostafavi
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search and CTAs */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <SearchBar />
            </div>
            
            {/* Phone CTA */}
            <a
              href="tel:7184004588"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors duration-200"
              aria-label="Call Dr. Mostafavi at (718) 400-4588"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">(718) 400-4588</span>
            </a>

            {/* Book Appointment CTA */}
            <a
              href="https://patientportal.advancedmd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
              aria-label="Book appointment - opens patient portal in new tab"
            >
              Book Appointment
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open main menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <SearchBar />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 font-semibold text-xl text-primary-600">
                Dr. Mostafavi
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-neutral-700"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-neutral-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <a
                    href="tel:7184004588"
                    className="flex items-center gap-2 text-base font-semibold text-neutral-900"
                    aria-label="Call Dr. Mostafavi at (718) 400-4588"
                  >
                    <Phone className="h-5 w-5" />
                    (718) 400-4588
                  </a>
                  <a
                    href="https://patientportal.advancedmd.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block"
                    aria-label="Book appointment - opens patient portal in new tab"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}