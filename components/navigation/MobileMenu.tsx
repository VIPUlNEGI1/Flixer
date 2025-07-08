"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X, ChevronRight, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
 

import SubMenu from "./SubMenu"

export default function MobileMenu({ items, isOpen, onClose }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-[320px] bg-gradient-to-b from-green-900 via-green-800 to-green-900 z-50 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-green-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JW</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">JustWravel</h2>
                  <p className="text-xs text-green-200">Travel Community</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-green-800/50 transition-colors">
                <X className="w-5 h-5 text-green-200" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id}>
                  {item.subMenu ? (
                    <>
                      <button
                        onClick={() => setActiveSubmenu(activeSubmenu === item.id ? null : item.id)}
                        className="flex items-center justify-between w-full p-3
                                  text-green-100 rounded-xl hover:bg-green-800/50 
                                  transition-all duration-200"
                      >
                        <span className="flex items-center">
                          {item.icon && <item.icon className="w-5 h-5 mr-3 text-green-300" />}
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
                          <SubMenu items={item.subMenu} isMobile isOpen={true} onItemClick={onClose} />
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="flex items-center w-full p-3 text-green-100
                                rounded-xl hover:bg-green-800/50 transition-all duration-200
                                group"
                    >
                      {item.icon && <item.icon className="w-5 h-5 mr-3 text-green-300 group-hover:text-green-200" />}
                      <span className="font-medium group-hover:text-white">{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-green-700/50 space-y-4">
              {/* Contact Info */}
              <div className="flex items-center space-x-3 p-3 bg-green-800/30 rounded-xl">
                <Phone className="w-5 h-5 text-green-300" />
                <div>
                  <p className="text-xs text-green-200">Call Us</p>
                  <p className="font-semibold text-white">+91 9797972175</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <Link
                  to="/plan-trip"
                  onClick={onClose}
                  className="flex items-center justify-center w-full p-3 bg-gradient-to-r 
                            from-orange-500 to-orange-600 text-white rounded-xl font-medium
                            shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Plan My Trip
                </Link>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center w-full p-3 bg-blue-600 
                            text-white rounded-xl font-medium hover:bg-blue-700 
                            transition-all duration-200"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
