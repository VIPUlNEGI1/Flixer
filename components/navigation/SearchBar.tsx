// components/navigation/SearchBar.tsx
'use client'
import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"
import Fuse from "fuse.js"
import { AnimatePresence, motion } from "framer-motion"

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
}

export default function SearchBar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Mock website data - replace with your actual data fetching logic
  const websiteData: SearchResult[] = [
    { id: '1', title: 'Home Page', description: 'Main landing page', url: '/' },
    { id: '2', title: 'Categories', description: 'Browse all categories', url: '/categories' },
    { id: '3', title: 'Contact Us', description: 'Get in touch with our team', url: '/contact' },
    // Add more pages as needed
  ]

  // Configure Fuse.js for fuzzy search
  const fuse = new Fuse(websiteData, {
    keys: ['title', 'description'],
    includeScore: true,
    threshold: 0.4,
  })

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      return
    }

    const searchResults = fuse.search(query)
    setResults(searchResults.map(result => result.item))
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (results.length > 0) {
      router.push(results[0].url)
      setIsOpen(false)
      setQuery("")
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Always visible search button on mobile */}
      <button
        className="p-2 text-gray-600 bg-slate-50 hover:text-primary rounded-lg transition-all"
        onClick={() => {
          setIsOpen(!isOpen)
          if (!isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100)
          }
        }}
      >
        <Search className="h-5 w-5" />
      </button>

      {/* Search dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute right-0 top-12 w-64 bg-white rounded-lg shadow-lg p-2 z-50"
        >
          <form onSubmit={handleSearch}>
            <div className="relative mb-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 text-sm border rounded-lg pr-8"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                onClick={() => {
                  setIsOpen(false)
                  setQuery("")
                }}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Search results */}
          {results.length > 0 && (
            <div className="max-h-60 overflow-y-auto">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                  onClick={() => {
                    router.push(result.url)
                    setIsOpen(false)
                    setQuery("")
                  }}
                >
                  <div className="font-medium text-sm">{result.title}</div>
                  <div className="text-xs text-gray-500">{result.description}</div>
                </div>
              ))}
            </div>
          )}

          {/* No results */}
          {query && results.length === 0 && (
            <div className="p-2 text-sm text-gray-500">No results found</div>
          )}
        </motion.div>
      )}
    </div>
  )
}