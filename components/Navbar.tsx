// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-background px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      <Link href="/">
        <span className="text-2xl font-bold">
          <span className="text-[var(--offwhite)]">Tundra</span>
          <span className="text-[#8e84ff]"> Webworks</span>
        </span>
      </Link>

      <nav className={`md:flex gap-6 ${open ? 'flex' : 'hidden'}`}>
        {['Home','About','Services','Contact'].map((lbl,i) => (
          <Link key={i} href={ i === 0 ? '/' : `/${lbl.toLowerCase()}` }>
            <span className="header-links font-light">{lbl}</span>
          </Link>
        ))}
      </nav>

      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? '✕' : '☰'}
      </button>
    </header>
  )
}
