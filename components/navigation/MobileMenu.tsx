import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuItem } from '@/types/navigation';
import { X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import SubMenu from './SubMenu';

interface MobileMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ items, isOpen, onClose }: MobileMenuProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

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
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-[300px] bg-gray-900 z-50"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <h2 className="text-lg font-semibold text-white">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <nav className="p-4 space-y-2">
              {items.map((item) => (
                <div key={item.id}>
                  {item.subMenu ? (
                    <>
                      <button
                        onClick={() => setActiveSubmenu(
                          activeSubmenu === item.id ? null : item.id
                        )}
                        className="flex items-center justify-between w-full p-3 
                                 text-gray-300 rounded-xl hover:bg-gray-800"
                      >
                        <span className="flex items-center">
                          {item.icon && <item.icon className="w-5 h-5 mr-3" />}
                          {item.label}
                        </span>
                        <ChevronRight className={`w-5 h-5 transition-transform ${
                          activeSubmenu === item.id ? 'rotate-90' : ''
                        }`} />
                      </button>
                      {activeSubmenu === item.id && (
                        <SubMenu
                          items={item.subMenu}
                          isMobile
                          isOpen={true}
                          onItemClick={onClose}
                        />
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center w-full p-3 text-gray-300 
                               rounded-xl hover:bg-gray-800"
                    >
                      {item.icon && <item.icon className="w-5 h-5 mr-3" />}
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}