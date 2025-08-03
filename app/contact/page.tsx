// app/contact/page.tsx
'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) throw new Error('Network error')
      setStatus('success')
      setName(''); setEmail(''); setMessage('')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <main className="bg-background min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white font-sans">
      <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-center">
        Contact Me
      </h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl">
        Email is the best way to reach me. Fill out the form below and I’ll
        typically respond within 1–3 business days.
      </p>

      {status === 'success' && (
        <p className="mb-4 text-green-400">✅ Message sent!</p>
      )}
      {status === 'error' && (
        <p className="mb-4 text-red-400">❌ Something went wrong.</p>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white bg-opacity-10 rounded-2xl p-8 space-y-6"
      >
        <div>
          <label className="block mb-2 font-medium">Your Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full p-3 rounded-lg bg-[#1f2125] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8e84ff] text-white"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Your Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg bg-[#1f2125] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8e84ff] text-white"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me a bit about your project…"
            className="w-full p-3 rounded-lg bg-[#1f2125] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8e84ff] text-white"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full py-3 rounded-full bg-[#8e84ff] text-white font-semibold text-lg hover:opacity-90 transition"
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </main>
  )
}
