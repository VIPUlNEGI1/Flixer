"use client"
import { motion } from "framer-motion"
import Link from "next/link"

interface SubMenuItem {
  id: string
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  description?: string
}

interface SubMenuProps {
  items: SubMenuItem[]
  isMobile?: boolean
  onItemClick?: () => void
  isOpen?: boolean
}

export default function SubMenu({ items, isMobile, onItemClick, isOpen = true }: SubMenuProps) {
  const menuVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.1,
      },
    },
  }

  if (isMobile) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={menuVariants}
        className="pl-4 mt-2 ml-4 border-l border-green-600/30 space-y-1"
      >
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={onItemClick}
            className="flex items-center px-4 py-2.5 text-sm text-green-100 rounded-lg
                     hover:bg-green-700/50 hover:text-white transition-all duration-200
                     group"
          >
            {item.icon && <item.icon className="w-4 h-4 mr-3 text-green-300 group-hover:text-green-200" />}
            <div className="flex flex-col">
              <span className="font-medium">{item.label}</span>
              {item.description && (
                <span className="text-xs text-green-300/70 group-hover:text-green-200/70">{item.description}</span>
              )}
            </div>
          </Link>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      className="absolute left-0 mt-3 w-80 p-3 bg-white/95 backdrop-blur-md
                rounded-2xl shadow-2xl border border-gray-200/50
                shadow-green-500/10"
    >
      <div className="grid gap-1">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex items-start p-4 rounded-xl hover:bg-gradient-to-r 
                     hover:from-green-50 hover:to-green-100
                     transition-all duration-200 group border border-transparent
                     hover:border-green-200/50"
          >
            <div className="flex items-start space-x-4 w-full">
              {item.icon && (
                <div
                  className="flex-shrink-0 p-2.5 bg-gradient-to-br from-green-100 to-green-200
                              rounded-xl group-hover:from-green-200 group-hover:to-green-300
                              transition-all duration-200"
                >
                  <item.icon className="w-5 h-5 text-green-600 group-hover:text-green-700" />
                </div>
              )}
              <div className="flex flex-col flex-1">
                <span
                  className="text-sm font-semibold text-gray-800
                               group-hover:text-green-700 transition-colors"
                >
                  {item.label}
                </span>
                {item.description && (
                  <span
                    className="mt-1 text-xs text-gray-500
                                 group-hover:text-gray-600 transition-colors"
                  >
                    {item.description}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}