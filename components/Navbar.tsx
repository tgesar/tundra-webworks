// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header
      className="
        sticky top-0 z-50
        bg-background/80 backdrop-blur-md
        border-b border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex-shrink-0 group" onClick={() => setOpen(false)}>
          <span className="text-2xl font-bold tracking-tight flex items-baseline">
            <span className="text-[var(--offwhite)]">Tundra</span>
            <span className="ml-1 text-[#8e84ff] group-hover:opacity-90 transition-opacity">
              Webworks
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`
                  relative text-sm tracking-wide
                  ${active ? 'text-[#8e84ff]' : 'text-white/80 hover:text-white'}
                  transition-colors
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8e84ff]/60 rounded
                `}
              >
                {label}
                {/* underline / active indicator */}
                <span
                  className={`
                    pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full
                    transition-opacity
                    ${active ? 'opacity-100 bg-[#8e84ff]' : 'opacity-0 group-hover:opacity-100 bg-white/40'}
                  `}
                />
              </Link>
            )
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/90 text-2xl p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8e84ff]/60"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`
          md:hidden overflow-hidden transition-[max-height] duration-300
          ${open ? 'max-h-96' : 'max-h-0'}
        `}
      >
        <nav className="px-4 pb-4">
          <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-3 flex flex-col">
            {links.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`
                    w-full px-4 py-3 rounded-xl text-base text-center
                    ${active ? 'bg-[#8e84ff] text-white' : 'text-white/90 hover:bg-white/10'}
                    transition-colors
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8e84ff]/60
                  `}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
