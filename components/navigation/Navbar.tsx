'use client'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Menu, Search, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import Logo from "../lib/Logo"
import SearchBar from "./SearchBar"
// import { navigationConfig } from "@/config/navigation"
import { Button } from "components/ui/button"
import { navigationConfig } from "config/navigation"


export default function Navbar() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check auth state on mount
  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const { mainNav, authConfig } = navigationConfig

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/90 backdrop-blur-sm"
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Left section */}
          <div className="flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              aria-label="Open mobile menu"
              className="lg:hidden p-2 mr-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/10 transition-all"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block"
            >
              <Logo />
            </motion.div>
          </div>

          {/* Center section */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-6">
            {mainNav.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => router.push(item.path)}
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-transparent"
              >
                {item.name}
              </Button>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <SearchBar />
            </motion.div>
            
            {isLoggedIn ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(authConfig.loggedIn.path)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="User profile"
              >
                <authConfig.loggedIn.icon className="w-5 h-5 text-gray-700" />
              </motion.button>
            ) : (
              <div className="flex gap-2">
                {authConfig.loggedOut.map((item) => (
                  <Button
                    key={item.id}
                    variant={item.id === 'login' ? 'outline' : 'default'}
                    size="sm"
                    onClick={() => router.push(item.path)}
                    className={item.id === 'login' 
                      ? 'border-primary text-primary hover:bg-primary/10' 
                      : 'bg-primary hover:bg-primary/90'}
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: "spring", bounce: 0.1 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <Logo />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/10"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              
              <nav className="flex flex-col space-y-2 flex-1">
                {mainNav.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Button
                      variant="ghost"
                      onClick={() => {
                        router.push(item.path)
                        setMobileMenuOpen(false)
                      }}
                      className="w-full justify-start text-lg py-5 px-4 rounded-lg"
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
              </nav>
              
              <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
                {isLoggedIn ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Button
                      variant="ghost"
                      onClick={() => {
                        router.push(authConfig.loggedIn.path)
                        setMobileMenuOpen(false)
                      }}
                      className="w-full py-5 text-lg rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <authConfig.loggedIn.icon className="w-5 h-5" />
                        {authConfig.loggedIn.name}
                      </div>
                    </Button>
                  </motion.div>
                ) : (
                  authConfig.loggedOut.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                    >
                      <Button
                        variant={item.id === 'login' ? 'outline' : 'default'}
                        onClick={() => {
                          router.push(item.path)
                          setMobileMenuOpen(false)
                        }}
                        className={`w-full py-5 text-lg rounded-lg ${
                          item.id === 'login' ? 'border-primary text-primary' : ''
                        }`}
                      >
                        {item.name}
                      </Button>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}