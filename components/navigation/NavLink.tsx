import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  hasSubmenu?: boolean;
  onClick?: () => void;
}

export default function NavLink({ href, children, isActive, hasSubmenu, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isCurrentPath = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative px-4 py-2 text-gray-200 hover:text-white transition-all duration-200"
    >
      <span className="relative z-10 flex items-center text-sm font-medium">
        {children}
      </span>
      
      {(isActive || isCurrentPath) && (
        <motion.div
          layoutId="navbar-active"
          className="absolute inset-0 bg-blue-500/10 rounded-lg"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
}