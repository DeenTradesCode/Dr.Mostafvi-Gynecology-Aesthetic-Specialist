import { useState } from 'react'
import { Menu, X, Calendar } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/utils'

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About Dr. Mastafavi', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Insurance', href: '#insurance' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-heading-light dark:text-heading-dark">
              Dr. Mastafavi
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blush-rose dark:text-gray-300 dark:hover:text-blush-rose"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden items-center space-x-4 md:flex">
            <button
              onClick={toggleTheme}
              className="rounded-lg bg-gray-100 p-2 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button className="btn-primary flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-lg bg-gray-100 p-2 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg bg-gray-100 p-2 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="mt-2 space-y-1 rounded-lg bg-gray-50 px-2 pb-3 pt-2 dark:bg-gray-800 sm:px-3">
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:text-blush-rose dark:text-gray-300 dark:hover:text-blush-rose"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="btn-primary mt-4 flex w-full items-center justify-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
