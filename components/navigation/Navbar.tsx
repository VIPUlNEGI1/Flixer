"use client"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown, ChevronUp, Search, Phone, MapPin, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

import NavLink from "./NavLink"
import SubMenu from "./SubMenu"
import MobileMenu from "./MobileMenu"
import { useDelayedHover } from "../../hooks/useDelayedHover"
import { navigationConfig } from "@/config/navigation"

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()
  const { handleMouseEnter, handleMouseLeave } = useDelayedHover(200)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
    setSearchOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo and Mobile Menu Button */}
            <div className="flex items-start">
              <button
                className="lg:hidden p-2 mr-1 rounded-lg text-gray-600 hover:text-green-600
                          hover:bg-green-50 transition-all duration-200"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>

              <a href="/" className="flex items-center space-x-2 md:space-x-3">
                <div
                  className=" w-21 
                             flex items-center justify-start shadow-lg"
                >
                  <img src="/logo-300x88-1[1].webp" alt="Logo" className="h-8 md:h-10 w-auto" />

                </div>
                
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationConfig.mainNav.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(() => setActiveSubmenu(item.id))}
                  onMouseLeave={() => handleMouseLeave(() => setActiveSubmenu(null))}
                >
                  <div className="flex items-center">
                    <NavLink
                      href={item.href}
                      hasSubmenu={!!item.subMenu}
                      isActive={activeSubmenu === item.id || pathname === item.href}
                    >
                      <span className="flex items-center gap-1.5">
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span>{item.label}</span>
                        {item.subMenu && (
                          <span className="ml-0.5">
                            {activeSubmenu === item.id ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </span>
                        )}
                      </span>
                    </NavLink>
                  </div>
                  <AnimatePresence>
                    {item.subMenu && activeSubmenu === item.id && (
                      <SubMenu items={item.subMenu} isOpen={true} />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search Button and Input - Mobile */}
              <div className="lg:hidden relative">
                <button
                  className="p-2 text-gray-600 hover:text-green-600 rounded-lg transition-all duration-200"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                </button>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-12 w-64 bg-white p-2 rounded-lg shadow-lg border border-gray-200"
                  >
                    <form onSubmit={handleSearch} className="flex">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="bg-green-600 text-white px-3 py-1.5 rounded-r-md  hover:bg-green-700 transition-colors"
                      >
                        <Search className="h-4 w-4" />
                      </button>
                    </form>
                  </motion.div>
                )}
              </div>

              {/* Contact Info - Hidden on mobile */}
              <div className="hidden xl:flex items-center space-x-2 text-sm text-gray-600 mr-2">
                <Phone className="h-4 w-4 text-green-600" />
                <div>
                  <p className="text-xs font-medium">Call Us</p>
                  <p className="font-semibold text-gray-800">+91 9797972175</p>
                </div>
              </div>
              {/* Search Button - Desktop */}
              {/* <button
                className="hidden md:flex p-2 text-gray-600 hover:text-green-600 
                            hover:bg-green-50 rounded-lg transition-all duration-200"
                onClick={() => {
                 
                  console.log("Desktop search clicked")
                }}
              >
                <Search className="h-5 w-5" />
              </button> */}


              {/* Action Buttons */}
              <div className="hidden sm:flex items-center space-x-2 md:space-x-3">
                <a
                  href="/plan-trip"
                  className="px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-orange-500 to-orange-600
                            text-white rounded-lg md:rounded-xl font-medium shadow-lg shadow-orange-500/25
                            hover:shadow-orange-500/40 transition-all duration-200
                            flex items-center gap-1.5 text-sm md:text-base"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="hidden xl:inline">Plan Trip</span>
                  <span className="xl:hidden">Plan</span>
                </a>

                {/* <a
                  href={navigationConfig.contactButton.href}
                  className="px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-500 to-blue-600
                            text-white rounded-lg md:rounded-xl font-medium shadow-lg shadow-blue-500/25
                            hover:shadow-blue-500/40 transition-all duration-200
                            flex items-center gap-1.5 text-sm md:text-base"
                >
                  <navigationConfig.contactButton.icon className="w-4 h-4" />
                  <span className="hidden xl:inline">{navigationConfig.contactButton.label}</span>
                  <span className="xl:hidden">Contact</span>
                </a> */}
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu
          items={navigationConfig.mainNav}
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </header>

      {/* Search Overlay for Desktop */}
      {/* {searchOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" onClick={() => setSearchOpen(false)}>
          <div className="flex justify-center pt-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-2xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search destinations, trips, articles..."
                  className="w-full px-6 py-4 rounded-xl border-0 shadow-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      )} */}
    </>
  )
}