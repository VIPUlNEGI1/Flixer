"use client"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X, ChevronRight, Phone } from "lucide-react"
import Link from "next/link"
import SubMenu from "./SubMenu"
import SearchBar from "./SearchBar" // Added SearchBar import

interface MenuItem {
  id: string
  label: string
  href?: string
  icon?: React.ComponentType<{ className?: string }>
  subMenu?: SubMenuItem[]
  onClick?: (e: React.MouseEvent) => void
}

interface SubMenuItem {
  id: string
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  description?: string
}

interface MobileMenuProps {
  items: MenuItem[]
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ items, isOpen, onClose }: MobileMenuProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    console.log("MobileMenu items:", items)
  }, [items])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
            aria-label="Close menu overlay"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[320px] bg-white z-50 shadow-2xl"
          >
            {/* Search Bar Section */}
            <div className="p-4 border-b border-gray-200">
              <SearchBar />
            </div>

            {/* Menu Items */}
            <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id}>
                  {item.subMenu && item.subMenu.length > 0 ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveSubmenu(activeSubmenu === item.id ? null : item.id)
                        }
                        className="flex items-center justify-between w-full p-3 text-gray-600 rounded-lg hover:bg-gray-100 transition-all duration-200"
                      >
                        <span className="flex items-center">
                          {item.icon && <item.icon className="w-5 h-5 mr-3 text-gray-400" />}
                          <span className="font-medium">{item.label}</span>
                        </span>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activeSubmenu === item.id ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeSubmenu === item.id && (
                          <SubMenu
                            items={item.subMenu}
                            isMobile
                            isOpen={true}
                            onItemClick={onClose}
                          />
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      onClick={(e) => {
                        if (item.onClick) item.onClick(e)
                        onClose()
                      }}
                      className="flex items-center w-full p-3 text-gray-600 rounded-lg hover:bg-gray-100 transition-all duration-200"
                    >
                      {item.icon && (
                        <item.icon className="w-5 h-5 mr-3 text-gray-400" />
                      )}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Section */}
            <div className="p-4 border-t border-gray-200 bg-white space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Call Us</p>
                  <p className="font-semibold text-gray-700">+91 9149050623</p>
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center w-full p-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all duration-200"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}