// components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background text-gray-400 py-8 px-6 lg:px-24 text-center">
      <p className="mb-4">&copy; {new Date().getFullYear()} Tundra Webworks</p>
      <div className="space-x-4">
        <Link href="/" className="hover:text-white transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-white transition">
          About
        </Link>
        <Link href="/services" className="hover:text-white transition">
          Services
        </Link>
        <Link href="/contact" className="hover:text-white transition">
          Contact
        </Link>
        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/tgesar/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block ml-4 text-secondary hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
