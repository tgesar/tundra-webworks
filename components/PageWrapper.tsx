'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={path}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="flex-grow relative"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}
