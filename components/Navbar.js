'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <header className="w-full shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/sigma-servicesss-DC-logo (1).png"
            alt="Sigma Logo"
            width={140}
            height={50}
            priority
          />
        </Link>

        {/* Nav Links */}
        <nav className="space-x-8 text-lg font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-black pb-1 border-b-2 transition duration-300 ${
                  isActive
                    ? 'border-[#2D9CDB]'
                    : 'border-transparent hover:border-[#2D9CDB]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Contact Button */}
        <a
          href="tel:+923001234567"
          className="flex items-center gap-2 bg-[#2D9CDB] text-white px-4 py-2 rounded hover:bg-[#2D9CDB] text-sm md:text-base"
        >
          <Phone size={18} />
          +92 300 1234567
        </a>
      </div>
    </header>
  )
}
