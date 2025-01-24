'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { navigationConfig } from '@/config/navigation';
import NavLink from './NavLink';
import SubMenu from './SubMenu';
import MobileMenu from './MobileMenu';
import { useDelayedHover } from '@/hooks/useDelayedHover';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { handleMouseEnter, handleMouseLeave } = useDelayedHover(200);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500 
                           to-indigo-600 flex items-center justify-center">
                <span className="text-xl font-bold text-white">AS</span>
              </div>
              <span className="text-xl font-bold text-white">Astern</span>
            </Link>
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
                <NavLink
                  href={item.href}
                  hasSubmenu={!!item.subMenu}
                  isActive={activeSubmenu === item.id}
                >
                  <span className="flex items-center gap-2">
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </span>
                </NavLink>
                <AnimatePresence>
                  {item.subMenu && activeSubmenu === item.id && (
                    <SubMenu items={item.subMenu} />
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Contact Button */}
            <Link
              href={navigationConfig.contactButton.href}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 
                       text-white rounded-xl font-medium shadow-lg shadow-blue-500/25
                       hover:shadow-blue-500/40 transition-all duration-200"
            >
              <span className="flex items-center gap-2">
                <navigationConfig.contactButton.icon className="w-4 h-4" />
                {navigationConfig.contactButton.label}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white 
                     hover:bg-gray-800 transition-all"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        items={navigationConfig.mainNav}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
