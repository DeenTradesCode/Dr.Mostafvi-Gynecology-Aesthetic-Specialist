'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Phone, Search } from 'lucide-react'
import SearchModal from './SearchModal'

const navigation = [
  { name: 'Procedures', href: '#procedures', scroll: true },
  { name: 'Contact', href: '/contact', scroll: false },
  { name: 'Insurance', href: '/insurance-faqs', scroll: false },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLAnchorElement>(null)
  const lastFocusableRef = useRef<HTMLAnchorElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Prevent body scroll when mobile menu or search modal is open
  useEffect(() => {
    if (mobileMenuOpen || searchModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen, searchModalOpen])

  // Handle ESC key and focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!mobileMenuOpen && !searchModalOpen) return

      if (e.key === 'Escape') {
        if (searchModalOpen) {
          setSearchModalOpen(false)
        } else if (mobileMenuOpen) {
          setMobileMenuOpen(false)
        }
        return
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstFocusableRef.current) {
            e.preventDefault()
            lastFocusableRef.current?.focus()
          }
        } else {
          // Tab
          if (document.activeElement === lastFocusableRef.current) {
            e.preventDefault()
            firstFocusableRef.current?.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen, searchModalOpen])

  // Focus first element when menu opens
  useEffect(() => {
    if (mobileMenuOpen) {
      setTimeout(() => {
        firstFocusableRef.current?.focus()
      }, 100)
    }
  }, [mobileMenuOpen])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      
      // If not on homepage, redirect to homepage first
      if (pathname !== '/') {
        router.push('/')
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) {
            const headerHeight = 80
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      } else {
        // Already on homepage, just scroll
        const element = document.querySelector(href)
        if (element) {
          const headerHeight = 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - headerHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }
  }

  const openMobileMenu = () => {
    setMobileMenuOpen(true)
    if (!prefersReducedMotion) {
      // Trigger animation after DOM update
      setTimeout(() => {
        setIsAnimating(true)
      }, 10)
    } else {
      // Skip animation for reduced motion
      setIsAnimating(true)
    }
  }

  const closeMobileMenu = () => {
    setIsAnimating(false)
    const animationDuration = prefersReducedMotion ? 0 : 500
    setTimeout(() => {
      setMobileMenuOpen(false)
    }, animationDuration)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <nav className="mx-auto max-w-7xl container-padding" aria-label="Global">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="-m-1.5 p-1.5 font-semibold text-xl text-primary-600">
                Dr. Mostafavi
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden xl:flex xl:gap-x-8 xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right-aligned actions */}
            <div className="flex items-center gap-4">
              {/* Search Icon */}
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                className="p-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                aria-label="Search procedures"
              >
                <Search className="h-5 w-5" aria-hidden="true" />
              </button>
              
              {/* Phone CTA */}
              <a
                href="tel:7184004588"
                className="hidden lg:flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                aria-label="Call Dr. Mostafavi at (718) 400-4588"
              >
                <Phone className="h-4 w-4" />
                <span>(718) 400-4588</span>
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
                className="xl:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
                onClick={openMobileMenu}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Open main menu"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

        </nav>
      </header>
      
      {/* Mobile menu overlay - below 1280px */}
      {mobileMenuOpen && (
        <>
          {/* Animated backdrop */}
          <div 
            className={`xl:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm ${
              prefersReducedMotion ? '' : 'transition-opacity duration-500 ease-out'
            } ${
              isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          
          {/* Mobile menu panel */}
          <div 
            ref={overlayRef}
            id="mobile-menu"
            className={`xl:hidden fixed top-0 right-0 z-50 h-[50vh] w-full max-w-sm transform ${
              prefersReducedMotion ? '' : 'transition-transform duration-500 ease-out'
            } ${
              isAnimating ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.95) 0%, 
                  rgba(248, 250, 252, 0.9) 25%,
                  rgba(241, 245, 249, 0.85) 50%,
                  rgba(248, 250, 252, 0.9) 75%,
                  rgba(255, 255, 255, 0.95) 100%
                )
              `,
              backdropFilter: 'blur(20px)',
              borderBottomLeftRadius: '24px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <Link 
                  href="/" 
                  className="font-semibold text-xl text-primary-600"
                  onClick={closeMobileMenu}
                >
                  Dr. Mostafavi
                </Link>
                <button
                  type="button"
                  className="rounded-lg p-2 text-neutral-700 hover:bg-white/20 transition-colors duration-200"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              {/* Menu Items */}
              <div className="flex-1 px-6 py-6">
                <nav className="space-y-3">
                  {navigation.map((item, index) => (
                    <a
                      key={item.name}
                      ref={index === 0 ? firstFocusableRef : undefined}
                      href={item.href}
                      onClick={(e) => {
                        handleSmoothScroll(e, item.href)
                        closeMobileMenu()
                      }}
                      className="block rounded-xl px-4 py-4 text-lg font-medium text-neutral-900 hover:bg-white/30 transition-all duration-200 hover:shadow-sm"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t border-white/20 space-y-4">
                  <a
                    href="tel:7184004588"
                    className="flex items-center gap-3 text-lg font-medium text-neutral-900 hover:text-primary-600 transition-colors duration-200 rounded-xl px-4 py-3 hover:bg-white/20"
                    aria-label="Call Dr. Mostafavi at (718) 400-4588"
                  >
                    <Phone className="h-5 w-5" />
                    (718) 400-4588
                  </a>
                  <a
                    ref={lastFocusableRef}
                    href="https://patientportal.advancedmd.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block text-lg py-4 rounded-xl"
                    aria-label="Book appointment - opens patient portal in new tab"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Search Modal */}
      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />
    </>
  )
}