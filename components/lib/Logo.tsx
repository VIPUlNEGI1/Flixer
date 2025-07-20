// components/brand/Logo.tsx
import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo-300x88-1[1].webp" // Update with your actual logo path
        alt="Company Logo"
        width={150} // Adjust based on your logo dimensions
        height={44}
        className="h-auto w-auto"
        priority
      />
    </Link>
  )
}