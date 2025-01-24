import { MenuItem } from '@/types/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface SubMenuProps {
  items: MenuItem[];
  isMobile?: boolean;
  onItemClick?: () => void;
  isOpen?: boolean;
}

export default function SubMenu({ items, isMobile, onItemClick, isOpen = true }: SubMenuProps) {
  const menuVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.1
      }
    }
  };

  if (isMobile) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={menuVariants}
        className="pl-4 mt-2 ml-4 border-l border-gray-700 space-y-1"
      >
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={onItemClick}
            className="flex items-center px-4 py-2 text-sm text-gray-300 rounded-lg
                     hover:bg-gray-700 hover:text-white transition-all duration-200"
          >
            {item.icon && <item.icon className="w-5 h-5 mr-3" />}
            <span>{item.label}</span>
            {item.description && (
              <span className="ml-2 text-xs text-gray-400">{item.description}</span>
            )}
          </Link>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      className="absolute left-0 mt-2 w-80 p-2 bg-gray-800/95 backdrop-blur-sm 
                rounded-2xl shadow-xl border border-gray-700/50"
    >
      <div className="grid gap-1">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex items-start p-3 rounded-xl hover:bg-gray-700/50
                     transition-all duration-200 group text-gray-100"
          >
            <div className="flex items-start space-x-3">
              {item.icon && (
                <div className="flex-shrink-0 p-2 bg-gray-700/50 rounded-lg 
                             group-hover:bg-gray-600/50 text-blue-400
                             group-hover:text-blue-300">
                  <item.icon className="w-5 h-5" />
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-100 
                              group-hover:text-white">
                  {item.label}
                </span>
                {item.description && (
                  <span className="mt-1 text-xs text-gray-400 
                                group-hover:text-gray-300">
                    {item.description}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}