'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X } from 'lucide-react'
import Fuse from 'fuse.js'
import { searchIndex } from '@/data/searchIndex'

interface SearchResult {
  item: {
    name: string
    slug: string
    category: string
    syn: string[]
  }
}

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const fuse = new Fuse(searchIndex, {
    keys: ['name', 'syn'],
    threshold: 0.3,
    includeScore: true,
  })

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.trim()) {
        const searchResults = fuse.search(query).slice(0, 8)
        setResults(searchResults)
        setIsOpen(true)
        setSelectedIndex(-1)
      } else {
        setResults([])
        setIsOpen(false)
      }
    }, 200)

    return () => clearTimeout(timeoutId)
  }, [query])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev))
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1))
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleSelect(results[selectedIndex].item.slug)
        }
        break
      case 'Escape':
        setIsOpen(false)
        inputRef.current?.blur()
        break
    }
  }

  const handleSelect = (slug: string) => {
    setQuery('')
    setIsOpen(false)
    setSelectedIndex(-1)
    router.push(slug)
  }

  const clearSearch = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
    setSelectedIndex(-1)
    inputRef.current?.focus()
  }

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-neutral-400" aria-hidden="true" />
        </div>
        <input
          ref={inputRef}
          type="search"
          placeholder="Search services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="block w-full pl-10 pr-10 py-2 border border-neutral-300 rounded-lg text-sm placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          aria-label="Search medical services"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          role="combobox"
          aria-autocomplete="list"
          aria-activedescendant={selectedIndex >= 0 ? `search-result-${selectedIndex}` : undefined}
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-neutral-400 hover:text-neutral-600" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-neutral-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          <div className="p-2">
            <div className="text-xs text-neutral-500 mb-2" aria-live="polite">
              {results.length} result{results.length !== 1 ? 's' : ''} found
            </div>
            <ul role="listbox" aria-label="Search results">
              {results.map((result, index) => (
                <li key={result.item.slug} role="option" aria-selected={index === selectedIndex}>
                  <button
                    id={`search-result-${index}`}
                    type="button"
                    onClick={() => handleSelect(result.item.slug)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
                      index === selectedIndex
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <div className="font-medium">{result.item.name}</div>
                    <div className="text-xs text-neutral-500">{result.item.category}</div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}