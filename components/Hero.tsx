'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* decorative blobs */}
      <div className="bg-overlay bg-accent w-[450px] h-[450px] top-[-100px] left-[-100px] animate-pulseSlow"></div>
      <div className="bg-overlay bg-primary w-[300px] h-[300px] bottom-[-80px] right-[-80px] animate-float"></div>

      {/* content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-10 text-center px-6"
      >
        <img
          src="/pfp.jpeg"
          alt="Trenzin Gesar"
          className="mx-auto w-40 h-40 rounded-full border-4 border-primary mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
          Building websites the right way.
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          I create modern, responsive websites tailored to your business—custom design to 24/7 booking systems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn">Get Started</button>
          <button className="btn !bg-white !text-accent">Learn More</button>
        </div>
      </motion.div>
    </section>
  )
}
