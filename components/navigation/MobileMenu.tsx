import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X, ChevronRight, Phone, Home, BookOpen, Mail, LogIn, UserPlus, Menu } from "lucide-react"
import Link from "next/link"
import SearchBar from "./SearchBar"
import Logo from "../lib/Logo"

interface MenuItem {
  id: string
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Home', href: '/', icon: Home },
    { id: 'categories', label: 'Categories', href: '/categories', icon: BookOpen },
    { id: 'contact', label: 'Contact', href: '/contact', icon: Mail },
  ]

  const authItems: MenuItem[] = [
    { id: 'login', label: 'Sign In', href: '/login', icon: LogIn },
    { id: 'register', label: 'Register', href: '/register', icon: UserPlus },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/10 transition-all"
        aria-label="Open menu"
      >
      
        <Menu  />
      </motion.button>

      {/* Sidebar Overlay and Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 bottom-0 w-64 bg-white z-50 shadow-xl flex flex-col"
            >
              {/* Header */}
              <div className={`p-4 border-b ${isScrolled ? 'border-gray-200' : 'border-transparent'}`}>
                <div className="flex justify-between items-center">
                  <Logo/>
                  <button
                    onClick={toggleMenu}
                    className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Search Bar */}
              <div className="p-4 border-b border-gray-200">
                <SearchBar  />
              </div>

              {/* Main Menu Items */}
              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
                    >
                      <item.icon className="w-5 h-5 mr-3 text-gray-500" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Auth Section */}
              <div className="p-4 border-t border-gray-200 space-y-3">
                {authItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className={`flex items-center justify-center p-3 rounded-lg font-medium transition-colors ${
                        item.id === 'register'
                          ? 'bg-gradient-to-r from-primary to-indigo-600 text-white shadow-md hover:from-primary/90 hover:to-indigo-600/90'
                          : 'border border-primary text-primary hover:bg-primary/10'
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-2" />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Need help?</p>
                    <p className="font-medium text-gray-800">+1 (234) 567-890</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}