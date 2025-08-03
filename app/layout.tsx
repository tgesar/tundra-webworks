// app/layout.tsx
'use client'

import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, easeInOut } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen relative">
        <Navbar />

        {/* Fade each page in on mount */}
        <motion.div
          key={path}                     // re-mount on route change
          initial={{ opacity: 0 }}       // start invisible
          animate={{ opacity: 1 }}       // fade to fully visible
          transition={{                  // half-second ease-in-out
            duration: 0.5,
            ease: easeInOut
          }}
          className="flex-grow"
        >
          {children}
        </motion.div>

        <Footer />
      </body>
    </html>
  )
}
