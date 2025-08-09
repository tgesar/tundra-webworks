// app/contact/page.tsx
'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

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
    <main className="bg-background min-h-screen px-6 py-20 text-white font-sans">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-5xl lg:text-6xl font-bold">Contact Me</h1>
        <p className="text-lg text-gray-300 mt-4">
          Email is the best way to reach me. Fill out the form and I’ll typically respond within 1–3 business days.
        </p>
      </div>

      {/* Grid: form + info */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* FORM */}
        <section className="md:col-span-3">
          {/* glass card */}
          <form
            onSubmit={handleSubmit}
            className="relative rounded-2xl p-8 bg-white/10 border border-white/10 backdrop-blur-sm space-y-6"
          >
            {/* subtle accent border glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />

            {status === 'success' && (
              <div className="rounded-lg bg-green-500/10 border border-green-500/20 text-green-300 px-4 py-3">
                ✅ Message sent! Thanks — I’ll be in touch soon.
              </div>
            )}
            {status === 'error' && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 px-4 py-3">
                ❌ Something went wrong. Please try again or email me directly.
              </div>
            )}

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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
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
        </section>

        {/* INFO CARD */}
        <aside className="md:col-span-2">
          <div className="rounded-2xl p-8 h-full bg-white/5 border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Prefer Email?</h2>
            <p className="text-gray-300 mb-6">
              You can always reach me directly. Email is the fastest way to get a response.
            </p>

            <a
              href="mailto:tundrawebworks@gmail.com"
              className="inline-flex items-center gap-3 rounded-xl bg-white/10 border border-white/10 px-4 py-3 hover:bg-white/15 transition"
            >
              {/* simple envelope svg */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M4 7l7.2 5.4a1.5 1.5 0 0 0 1.8 0L20 7" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="font-medium">tundrawebworks@gmail.com</span>
            </a>

            <div className="mt-8 space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                Typically replies in 1–3 business days
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-medium mb-2">What to include (optional):</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Brief overview of your project</li>
                  <li>Any example sites you like</li>
                  <li>Timeline or key deadlines</li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
