"use client"
import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { quickDestinations, popularCategories } from "../../config/navigation"

interface SearchBarProps {}

export default function SearchBar({}: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [filteredResults, setFilteredResults] = useState<
    { id: string; label: string; href: string; type: string }[]
  >([])
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (!query.trim()) {
      setFilteredResults([])
      return
    }

    const allItems = [
      ...quickDestinations.map((item) => ({ ...item, type: "Destination" })),
      ...popularCategories.map((item) => ({ ...item, type: "Category" })),
    ]

    const results = allItems.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredResults(results)
  }, [query])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (filteredResults.length > 0) {
      window.location.href = filteredResults[0].href
    }
    setIsOpen(false)
    setQuery("")
  }

  return (
    <div className="relative" ref={searchRef}>
      <button
        className="p-2 text-gray-600 hover:text-green-600 rounded-lg transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle search"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-2xl border border-gray-200/50 p-4 z-50"
          >
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search destinations or categories..."
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-600"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>

            {filteredResults.length > 0 && (
              <div className="mt-3 max-h-60 overflow-y-auto">
                {filteredResults.map((result) => (
                  <a
                    key={result.id}
                    href={result.href}
                    className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors"
                    onClick={() => {
                      setIsOpen(false)
                      setQuery("")
                    }}
                  >
                    <span className="font-medium">{result.label}</span>
                    <span className="ml-2 text-xs text-gray-500">({result.type})</span>
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}