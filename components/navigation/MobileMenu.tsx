import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X, Phone, Home, BookOpen, Mail, LogIn, UserPlus, Menu, LogOut, User } from "lucide-react"
import Link from "next/link"
import SearchBar from "./SearchBar"
import Logo from "../lib/Logo"
import { useRouter } from "next/navigation"
import { authService } from "../lib/auth"
 

interface MenuItem {
  id: string
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsLoggedIn(authService.isAuthenticated())
  }, [])

  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Home', href: '/', icon: Home },
    { id: 'categories', label: 'Categories', href: '/categories', icon: BookOpen },
    { id: 'contact', label: 'Contact', href: '/contact', icon: Mail },
  ]

  const authItems: MenuItem[] = isLoggedIn
    ? [
        { id: 'profile', label: 'Profile', href: '/profile', icon: User },
        { id: 'logout', label: 'Sign Out', href: '#', icon: LogOut }
      ]
    : [
        { id: 'login', label: 'Sign In', href: '/login', icon: LogIn },
        { id: 'register', label: 'Register', href: '/register', icon: UserPlus }
      ]

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleAuthAction = (item: MenuItem) => {
    if (item.id === 'logout') {
      authService.logout()
      setIsLoggedIn(false)
      router.push('/')
      toggleMenu()
    } else {
      toggleMenu()
    }
  }

  return (
    <>
      {/* Mobile Menu Button - Optimized for small screens */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        className="lg:hidden p-2 rounded-lg bg-slate-50 text-gray-900 hover:bg-gray-100 transition-all"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </motion.button>

      {/* Sidebar Overlay and Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay with better touch target */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />

            {/* Sidebar with responsive width */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 bottom-0 w-[280px] max-w-[85vw] bg-white z-50 shadow-xl flex flex-col"
            >
              {/* Header with close button */}
              <div className={`p-3 border-b ${isScrolled ? 'border-gray-200' : 'border-transparent'}`}>
                <div className="flex justify-between items-center">
                  <Logo   />
                  <button
                    onClick={toggleMenu}
                    className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-gray-900" />
                  </button>
                </div>
              </div>

              {/* Search Bar with proper spacing */}
              <div className="p-3 border-b border-gray-200">
                <SearchBar   />
              </div>

              {/* Main Menu Items with better touch targets */}
              <nav className="flex-1 overflow-y-auto p-2 space-y-1">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-900 transition-colors text-sm"
                    >
                      <item.icon className="w-5 h-5 mr-3 text-gray-700" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Auth Section with proper spacing */}
              <div className="p-3 border-t border-gray-200 space-y-2">
                {authItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.id === 'logout' ? (
                      <button
                        onClick={() => handleAuthAction(item)}
                        className={`w-full flex items-center justify-center p-2.5 rounded-lg font-medium transition-colors ${
                          'border border-gray-300 text-gray-900 hover:bg-gray-100'
                        } text-sm`}
                      >
                        <item.icon className="w-5 h-5 mr-2" />
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => handleAuthAction(item)}
                        className={`flex items-center justify-center p-2.5 rounded-lg font-medium transition-colors ${
                          item.id === 'register'
                            ? 'bg-black text-white hover:bg-gray-800'
                            : 'border border-gray-300 text-gray-900 hover:bg-gray-100'
                        } text-sm`}
                      >
                        <item.icon className="w-5 h-5 mr-2" />
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Contact Info with better spacing */}
              <div className="p-3 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-3 p-2 bg-white rounded-lg">
                  <Phone className="w-5 h-5 text-gray-700" />
                  <div>
                    <p className="text-xs text-gray-600">Need help?</p>
                    <p className="font-medium text-gray-900 text-sm">+1 (234) 567-890</p>
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