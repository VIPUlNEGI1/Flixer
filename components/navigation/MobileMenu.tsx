"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronRight, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import SubMenu from "./SubMenu";

// Define interfaces for type safety
interface MenuItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  subMenu?: SubMenuItem[];
}

interface SubMenuItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
}

interface MobileMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ items, isOpen, onClose }: MobileMenuProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Debug items prop
  useEffect(() => {
    console.log("MobileMenu items:", items);
  }, [items]);

  return (
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
            onClick={onClose}
            aria-label="Close menu overlay"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-[320px] bg-gradient-to-b from-green-900 via-green-800 to-green-900 z-50 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-green-700/50 bg-green-950">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JW</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">GNET</h2>
                  <p className="text-xs text-green-200">Travel Community</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-green-800 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-green-200" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2 flex-1 overflow-y-auto bg-green-900">
              {items.map((item) => (
                <div key={item.id}>
                  {item.subMenu && item.subMenu.length > 0 ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveSubmenu(activeSubmenu === item.id ? null : item.id)
                        }
                        className="flex items-center justify-between w-full p-3 text-green-100 rounded-xl hover:bg-green-800 transition-all duration-200"
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
                      onClick={onClose}
                      className="flex items-center w-full p-3  text-green-100 rounded-xl hover:bg-green-800/400 transition-all duration-200 group"
                    >
                      {item.icon && (
                        <item.icon className="w-5 h-5 mr-3 text-green-300 group-hover:text-green-200" />
                      )}
                      <span className="font-medium group-hover:text-white">{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-green-900  bg-green-900 space-y-4">
              {/* Contact Info */}
              <div className="flex items-center space-x-3 p-3 bg-green-800 rounded-xl">
                <Phone className="w-5 h-5 text-green-300" />
                <div>
                  <p className="text-xs text-green-200">Call Us</p>
                  <p className="font-semibold text-white">+91 92584 60950</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <Link
                  href="/plan-trip"
                  onClick={onClose}
                  className="flex items-center justify-center w-full p-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Plan My Trip
                </Link>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center w-full p-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-200"
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
  );
}
