'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Search, Bell, User } from 'lucide-react';

interface SubItem {
  name: string;
  href: string;
  description?: string;
}

interface NavigationItem {
  name: string;
  href: string;
  subItems?: SubItem[];
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Services',
    href: '/services',
    subItems: [
      { name: 'Strategy Consulting', href: '/services/strategy', description: 'Transform your business with expert guidance' },
      { name: 'Digital Transformation', href: '/services/digital', description: 'Embrace the future of technology' },
      { name: 'Business Analytics', href: '/services/analytics', description: 'Data-driven decision making' }
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    subItems: [
      { name: 'Healthcare', href: '/industries/healthcare', description: 'Revolutionary healthcare solutions' },
      { name: 'Financial Services', href: '/industries/finance', description: 'Innovative financial strategies' },
      { name: 'Technology', href: '/industries/technology', description: 'Cutting-edge tech consulting' }
    ]
  },
  {
    name: 'About',
    href: '/about',
    subItems: [
      { name: 'Our Team', href: '/about/team', description: 'Meet our world-class experts' },
      { name: 'Company History', href: '/about/history', description: 'Our journey of excellence' },
      { name: 'Careers', href: '/about/careers', description: 'Join our growing team' }
    ]
  },
  {
    name: 'Contact',
    href: '/contact'
  }
];

interface NavbarItemProps {
  item: NavigationItem;
  isHovered: boolean;
  setHoveredItem: (itemName: string | null) => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ item, isHovered, setHoveredItem }) => {
  return (
    <div
      className="relative group"
      onMouseEnter={() => setHoveredItem(item.name)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <button className="flex items-center px-4 py-2 text-gray-100 hover:text-white transition-colors duration-200 focus:outline-none">
        {item.name}
        {item.subItems && (
          <span className="ml-2 transform transition-transform duration-200">
            {isHovered ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        )}
      </button>
      {item.subItems && isHovered && (
        <div className="absolute left-0 mt-2 w-72 bg-gray-800 rounded-xl shadow-2xl py-3 z-20">
          {item.subItems.map((subItem) => (
            <a
              key={subItem.name}
              href={subItem.href}
              className="block px-4 py-3 hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="text-sm font-semibold text-gray-100">{subItem.name}</div>
              <div className="text-xs text-gray-400 mt-1">{subItem.description}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900 shadow-lg'
          : 'bg-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-lg bg-white bg-opacity-20 flex items-center justify-center">
              <span className="text-xl font-bold text-white">AS</span>
            </div>
            <span className="text-xl font-bold text-white">Astern Solutions</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigationItems.map((item) => (
              <NavbarItem
                key={item.name}
                item={item}
                isHovered={hoveredItem === item.name}
                setHoveredItem={setHoveredItem}
              />
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-100 hover:text-white transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="text-gray-100 hover:text-white transition-colors duration-200">
              <Bell size={20} />
            </button>
            <div className="h-8 w-[1px] bg-gray-400 bg-opacity-30"></div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-all duration-200">
              <User size={18} className="text-gray-100" />
              <span className="text-sm text-gray-100">Account</span>
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-100 hover:text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-3 space-y-2 bg-gray-800">
          {navigationItems.map((item) => (
            <div key={item.name} className="block">
              <button
                onClick={() => setHoveredItem(item.name)}
                className="w-full text-left px-4 py-3 text-gray-100 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  {item.subItems && (
                    <span className="transform transition-transform duration-200">
                      {hoveredItem === item.name ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </span>
                  )}
                </div>
              </button>
              {item.subItems && hoveredItem === item.name && (
                <div className="pl-4 mt-2 space-y-2">
                  {item.subItems.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200"
                    >
                      <div>{subItem.name}</div>
                      <div className="text-xs text-gray-400 mt-1">{subItem.description}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 flex flex-col space-y-3">
            <button className="w-full px-6 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-lg transition-all duration-200">
              <div className="flex items-center justify-center space-x-2">
                <User size={18} />
                <span>Account</span>
              </div>
            </button>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg transition-all duration-200 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
