'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-background px-4 py-3 flex items-center justify-between sticky top-0 z-30">
      <Link href="/" className="flex-shrink-0">
        <span className="text-xl lg:text-2xl font-bold flex items-baseline">
          <span className="text-[var(--offwhite)]">Tundra</span>
          <span className="text-[var(--secondary-accent)] ml-1">Webworks</span>
        </span>
      </Link>

      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? '✕' : '☰'}
      </button>

      <nav
        className={`
          md:flex md:items-center md:gap-6
          ${open ? 'flex flex-col items-center gap-4 mt-2' : 'hidden'}
        `}
      >
        {['Home','About','Services','Contact'].map((lbl,i) => (
          <Link
            key={i}
            href={ i === 0 ? '/' : `/${lbl.toLowerCase()}` }
            className="header-links font-light text-lg"
            onClick={()=>setOpen(false)}
          >
            {lbl}
          </Link>
        ))}
      </nav>
    </header>
  )
}
