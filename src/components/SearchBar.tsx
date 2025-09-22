'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import searchIndex from '@/data/searchIndex.json'

interface SearchResult {
  name: string
  slug: string
  category: string
  syn: string[]
}

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isLoading, setIsLoading] = useState(false)
  
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setIsOpen(false)
      return
    }

    setIsLoading(true)
    const timeoutId = setTimeout(() => {
      const searchResults = searchIndex.filter((item) => {
        const searchText = `${item.name} ${item.category} ${item.syn.join(' ')}`.toLowerCase()
        return searchText.includes(query.toLowerCase())
      }).slice(0, 8)

      setResults(searchResults)
      setIsOpen(searchResults.length > 0)
      setIsLoading(false)
    }, 200)

    return () => clearTimeout(timeoutId)
  }, [query])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleSelectResult(results[selectedIndex])
        }
        break
      case 'Escape':
        setIsOpen(false)
        setSelectedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  const handleSelectResult = (result: SearchResult) => {
    router.push(result.slug)
    setQuery('')
    setIsOpen(false)
    setSelectedIndex(-1)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setSelectedIndex(-1)
  }

  const handleInputFocus = () => {
    if (results.length > 0) {
      setIsOpen(true)
    }
  }

  const handleInputBlur = () => {
    // Delay to allow click on results
    setTimeout(() => setIsOpen(false), 150)
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className="w-full px-4 py-2 pl-10 pr-4 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {isLoading && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent"></div>
          </div>
        )}
      </div>

      {/* Search Results */}
      {isOpen && results.length > 0 && (
        <div
          ref={resultsRef}
          className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-80 overflow-y-auto"
          role="listbox"
          aria-label="Search results"
        >
          <div className="p-2 text-xs text-gray-500 border-b border-gray-100" aria-live="polite">
            {results.length} result{results.length !== 1 ? 's' : ''} found
          </div>
          {results.map((result, index) => (
            <button
              key={result.slug}
              onClick={() => handleSelectResult(result)}
              className={cn(
                'w-full text-left px-4 py-3 hover:bg-accent-2 transition-colors',
                'flex items-center justify-between',
                selectedIndex === index && 'bg-accent-2'
              )}
              role="option"
              aria-selected={selectedIndex === index}
            >
              <div>
                <div className="font-medium text-ink">{result.name}</div>
                <div className="text-sm text-gray-600">{result.category}</div>
              </div>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent-2 text-accent">
                {result.category}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
