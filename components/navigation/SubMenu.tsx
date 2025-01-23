import { MenuItem } from '@/types/navigation';
import Link from 'next/link';

interface SubMenuProps {
  items: MenuItem[];
  isMobile?: boolean;
}

export default function SubMenu({ items, isMobile }: SubMenuProps) {
  if (isMobile) {
    return (
      <div className="mobile-submenu">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="mobile-nav-item"
          >
            {item.icon && <item.icon className="w-4 h-4" />}
            {item.label}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="submenu">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="submenu-item"
        >
          {item.icon && <item.icon className="w-4 h-4 mr-2.5" />}
          {item.label}
        </Link>
      ))}
    </div>
  );
}