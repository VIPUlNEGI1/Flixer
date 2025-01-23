import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hasSubmenu?: boolean;
}

export default function NavLink({ href, children, className, onClick, hasSubmenu }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        'nav-item',
        isActive ? 'nav-item-active' : 'nav-item-inactive',
        hasSubmenu && 'pr-6',
        className
      )}
    >
      {children}
    </Link>
  );
}