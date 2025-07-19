"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive: boolean
  hasSubmenu?: boolean
  onClick?: () => void
}

export default function NavLink({ href, children, isActive, hasSubmenu, onClick }: NavLinkProps) {
  const pathname = usePathname()
  const isCurrentPath = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative px-4 py-3 text-gray-700 hover:text-green-600 
                transition-all duration-200 rounded-xl group"
    >
      <span className="relative z-10 flex items-center text-sm font-medium group-hover:text-green-700">{children}</span>

      {(isActive || isCurrentPath) && (
        <motion.div
          layoutId="navbar-active"
          className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 
                    rounded-xl border border-green-200/50"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 
                   rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      />
    </Link>
  )
}