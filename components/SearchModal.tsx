'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X, ArrowRight } from 'lucide-react'
import Fuse from 'fuse.js'
import { allServices } from '@/data/services'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

interface SearchResult {
  item: {
    name: string
    slug: string
    category: string
    description: string
  }
}

function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLInputElement>(null)
  const lastFocusableRef = useRef<HTMLButtonElement>(null)

  // Create search index from services
  const searchIndex = allServices.map(service => ({
    name: service.name,
    slug: `/${service.category}/${service.slug}`,
    category: service.category,
    description: service.description
  }))

  const fuse = new Fuse(searchIndex, {
    keys: ['name', 'description'],
    threshold: 0.3,
    includeScore: true,
  })

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    } else {
      setQuery('')
      setResults([])
      setSelectedIndex(-1)
    }
  }, [isOpen])

  // Search functionality
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.trim()) {
        const searchResults = fuse.search(query).slice(0, 8)
        setResults(searchResults)
        setSelectedIndex(-1)
      } else {
        setResults([])
        setSelectedIndex(-1)
      }
    }, 200)

    return () => clearTimeout(timeoutId)
  }, [query])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        onClose()
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

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev))
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1))
      }

      if (e.key === 'Enter') {
        e.preventDefault()
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleSelect(results[selectedIndex].item.slug)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex])

  const handleSelect = (slug: string) => {
    onClose()
    router.push(slug)
  }


  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
      onClick={(e) => {
        // Close modal when clicking on the backdrop (outside modal content)
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out"
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <div 
        ref={modalRef}
        className="relative z-50 w-full max-w-2xl bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click when clicking inside modal
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
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <h2 id="search-modal-title" className="text-xl font-semibold text-neutral-900">
            Search for Procedures
          </h2>
          <button
            ref={lastFocusableRef}
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-neutral-700 hover:bg-white/20 transition-colors duration-200"
            aria-label="Close search"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-neutral-400" aria-hidden="true" />
            </div>
            <input
              ref={firstFocusableRef}
              type="search"
              placeholder="Search for procedures and treatments..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 border border-neutral-300 rounded-xl text-lg placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/50"
              aria-label="Search procedures"
              aria-expanded={results.length > 0}
              aria-haspopup="listbox"
              role="combobox"
              aria-autocomplete="list"
              aria-activedescendant={selectedIndex >= 0 ? `search-result-${selectedIndex}` : undefined}
            />
          </div>

          {/* Prompt Text */}
          {!query && (
            <div className="mt-4 text-center">
              <p className="text-neutral-600 text-lg">
                Start typing to search for procedures and treatments
              </p>
              <p className="text-neutral-500 text-sm mt-2">
                Find gynecology, aesthetics, and cosmetic gynecology services
              </p>
            </div>
          )}

          {/* Search Results */}
          {query && results.length > 0 && (
            <div className="mt-6">
              <div className="text-sm text-neutral-500 mb-3" aria-live="polite">
                {results.length} result{results.length !== 1 ? 's' : ''} found
              </div>
              <ul role="listbox" aria-label="Search results" className="space-y-2">
                {results.map((result, index) => (
                  <li key={result.item.slug} role="option" aria-selected={index === selectedIndex}>
                    <button
                      id={`search-result-${index}`}
                      type="button"
                      onClick={() => handleSelect(result.item.slug)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                        index === selectedIndex
                          ? 'bg-primary-50 text-primary-700 border border-primary-200'
                          : 'text-neutral-700 hover:bg-white/30 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-semibold text-lg">{result.item.name}</div>
                          <div className="text-sm text-neutral-500 mt-1 capitalize">
                            {result.item.category.replace('-', ' ')}
                          </div>
                          <div className="text-sm text-neutral-600 mt-2 line-clamp-2">
                            {result.item.description}
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-neutral-400 ml-4" />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* No Results */}
          {query && results.length === 0 && (
            <div className="mt-6 text-center">
              <p className="text-neutral-600 text-lg">
                No procedures found for "{query}"
              </p>
              <p className="text-neutral-500 text-sm mt-2">
                Try different keywords or browse our main categories
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchModal
