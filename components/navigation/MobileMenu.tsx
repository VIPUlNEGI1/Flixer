import { MenuItem } from '@/types/navigation';
import Link from 'next/link';
import { HiX } from 'react-icons/hi';
import SubMenu from './SubMenu';

interface MobileMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ items, isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-[280px] bg-white">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-700 hover:text-primary 
                     hover:bg-gray-50 active:bg-gray-100 transition-all duration-200"
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-3 space-y-1">
          {items.map((item) => (
            <div key={item.id}>
              <Link
                href={item.href}
                className="mobile-nav-item"
                onClick={onClose}
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                {item.label}
              </Link>
              {item.subMenu && <SubMenu items={item.subMenu} isMobile />}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}