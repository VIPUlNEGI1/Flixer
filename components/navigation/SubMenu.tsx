'use client'

import { useMemo } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface SubMenuItem {
  id: string
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  description?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

interface SubMenuProps {
  items: SubMenuItem[]
  isMobile?: boolean
  onItemClick?: () => void
  isOpen?: boolean
}

export default function SubMenu({ items, isMobile = false, onItemClick, isOpen = true }: SubMenuProps) {
  const menuVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.1,
        ease: 'easeIn',
      },
    },
  }

  const renderItem = (item: SubMenuItem) => {
    const { id, label, href, icon: Icon, description, onClick } = item
    const linkProps = {
      href: href || '#', // Fallback to '#' if href is invalid
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
        onClick?.(e)
        onItemClick?.()
      },
      className: isMobile
        ? 'flex items-center px-4 py-2.5 text-sm text-green-100 rounded-lg hover:bg-green-700/50 hover:text-white transition-all duration-200 group'
        : 'flex items-start p-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 transition-all duration-200 group border border-transparent hover:border-green-200/50',
      role: 'menuitem' as const,
    }

    return (
      <Link key={id} {...linkProps}>
        <div className={isMobile ? 'flex flex-col' : 'flex items-start space-x-4 w-full'}>
          {Icon && (
            <div
              className={
                isMobile
                  ? 'w-4 h-4 mr-3 text-green-300 group-hover:text-green-200'
                  : 'flex-shrink-0 p-2.5 bg-gradient-to-br from-green-100 to-green-200 rounded-xl group-hover:from-green-200 group-hover:to-green-300 transition-all duration-200'
              }
            >
              <Icon className={isMobile ? 'w-4 h-4' : 'w-5 h-5 text-green-600 group-hover:text-green-700'} />
            </div>
          )}
          <div className={isMobile ? '' : 'flex flex-col flex-1'}>
            <span
              className={
                isMobile
                  ? 'font-medium'
                  : 'text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors'
              }
            >
              {label}
            </span>
            {description && (
              <span
                className={
                  isMobile
                    ? 'text-xs text-green-300/70 group-hover:text-green-200/70'
                    : 'mt-1 text-xs text-gray-500 group-hover:text-gray-600 transition-colors'
                }
              >
                {description}
              </span>
            )}
          </div>
        </div>
      </Link>
    )
  }

  const renderedItems = useMemo(() => items.map(renderItem), [items, isMobile, onItemClick])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className={
            isMobile
              ? 'pl-4 mt-2 ml-4 border-l border-green-600/30 space-y-1'
              : 'absolute left-0 mt-3 w-80 max-w-full p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50'
          }
          role="menu"
          aria-orientation={isMobile ? 'vertical' : 'vertical'}
        >
          <div className={isMobile ? '' : 'grid gap-1'}>{renderedItems}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}