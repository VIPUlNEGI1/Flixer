"use client"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown, ChevronUp, Phone, X, LogOut, User } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import NavLink from "./NavLink"
import SubMenu from "./SubMenu"
import MobileMenu from "./MobileMenu"
import SearchBar from "./SearchBar"
import { navigationConfig } from "../../config/navigation"
import { useDelayedHover } from "./useDelayedHower" // Fixed typo from previous code
import { useAuth } from "../services/useAuth"

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const pathname = usePathname()
  const { handleMouseEnter, handleMouseLeave } = useDelayedHover(200)
  const { user, isAuthenticated, login, logout, register } = useAuth()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const dynamicNavItems = [
    ...navigationConfig.mainNav,
    !isAuthenticated && {
      id: "auth",
      label: user ? "Login" : "Register",
      href: user ? "/login" : "/register",
      icon: user ? navigationConfig.specialButtons.find((btn) => btn.id === "Login")?.icon : undefined,
    },
    isAuthenticated && {
      id: "profile",
      label: "Profile",
      href: "#",
      icon: User,
      subMenu: [
        { id: "profile-view", label: "View Profile", href: "/profile" },
        { id: "logout", label: "Logout", href: "#", onClick: (e: React.MouseEvent) => {
          e.preventDefault()
          logout()
        }},
      ],
    },
  ].filter(Boolean) // Filter out undefined items

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo and Mobile Menu Button */}
            <div className="flex items-center">
              <button
                className="lg:hidden p-2 mr-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
              <a href="/" className="flex items-center space-x-3">
                <div className="flex items-center justify-start shadow-lg">
                  <img src="/logo-300x88-1[1].webp" alt="Logo" className="h-8 md:h-10 w-auto" />
                </div>
              </a>
            </div>

            {/* Centered Navigation and Search Bar */}
            <div className="flex-1 flex items-center justify-center space-x-8">
              <div className="hidden lg:flex items-center space-x-6">
                {navigationConfig.mainNav.map((item) => (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(() => setActiveSubmenu(item.id))}
                    onMouseLeave={() => handleMouseLeave(() => setActiveSubmenu(null))}
                  >
                    <div className="flex items-center  space-x-2 md:space-x-4 lg:space-x-6">
                      <NavLink
                        href={item.href}
                        hasSubmenu={!!item.subMenu}
                        isActive={activeSubmenu === item.id || pathname === item.href}
                      >
                        <span className="flex items-center gap-1.5">
                          {item.icon && <item.icon className="w-5 h-5" />}
                          <span className="text-sm font-medium">{item.label}</span>
                          {item.subMenu && (
                            <span className="ml-1">
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
              <SearchBar  />
            </div>

            {/* Right Corner Authentication Options */}
            <div className="flex items-center space-x-4">
              {dynamicNavItems
                .filter((item) => item.id === "auth" || item.id === "profile")
                .map((item) => (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(() => {
                      if (item.id === "profile") setUserMenuOpen(true)
                      setActiveSubmenu(item.id)
                    })}
                    onMouseLeave={() => {
                      handleMouseLeave(() => setActiveSubmenu(null))
                      if (item.id === "profile") setUserMenuOpen(false)
                    }}
                  >
                    
                    <div className="flex items-center">
                      <NavLink
                        href={item.href}
                        hasSubmenu={!!item.subMenu}
                        isActive={activeSubmenu === item.id || pathname === item.href}
                      >
                        <span className="flex items-center gap-1.5">
                          {item.icon && <item.icon className="w-5 h-5" />}
                        <span className="text-sm font-medium bg-gradient-to-r  from-cyan-500 to-blue-500 text-white px-11 py-2 rounded">
  {item.label}
</span>

                          {item.subMenu && (
                            <span className="ml-1">
                              {userMenuOpen ? (
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
                      {item.subMenu && activeSubmenu === item.id && userMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                        >
                          {item.subMenu.map((subItem) => (
                            <a
                              key={subItem.id}
                              href={subItem.href}
                              onClick={(e) => {
                                if (subItem.onClick) subItem.onClick(e)
                              }}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
            </div>
          </div>
        </nav>

        <MobileMenu
          items={dynamicNavItems}
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </header>
    </>
  )
}