// app/services/page.tsx
'use client'

import React from 'react'

export default function ServicesPage() {
  const packages = [
    {
      name: 'Starter',
      price: '$400',
      description: [
        'Front-end only, up to 5 responsive pages',
        'Clean branding & layout',
        'Google Maps embed',
        'Subtle UX hover & scroll effects',
        'Domain purchase available (additional cost)',
      ],
      link: 'https://www.paypal.com/ncp/payment/E2S4VQYD4KGBA',
    },
    {
      name: 'Standard',
      price: '$1,000',
      description: [
        'Up to 7 pages with full-stack development',
        'Google Calendar booking system integration',
        'Automated contact form → email alert',
        'Animated transitions & custom visuals',
        'Domain purchase available (additional cost)',
      ],
      link: 'https://www.paypal.com/ncp/payment/MD2UGWVYFVJ4Y',
    },
    {
      name: 'Pro',
      price: '$2,500',
      description: [
        'Up to 10 pages & advanced back-end features',
        'Full booking + automated review prompts',
        'Email signups & newsletter integration',
        'Chatbot for 24/7 user support',
        'Premium design, media galleries & menus',
      ],
      link: 'https://www.paypal.com/ncp/payment/Z5BQ2N7AGX6GQ',
    },
  ]

  return (
    <main className="bg-background text-white min-h-screen py-20 px-6 lg:px-24 font-sans">
      <h1 className="text-5xl lg:text-6xl font-bold text-center mb-12">
        Services & Prices
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="flex flex-col bg-[#1f2125] rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-4 text-center">
              {pkg.name}
            </h2>
            <div className="text-5xl font-bold text-center mb-6">
              {pkg.price}
            </div>
            <ul className="flex-1 space-y-3 mb-6 text-lg leading-relaxed">
              {pkg.description.map((line, i) => (
                <li key={i} className="before:content-['✓'] before:mr-2 before:text-secondary">
                  {line}
                </li>
              ))}
            </ul>
            <a
              href={pkg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block text-center py-3 rounded-full bg-[#8e84ff] text-white font-semibold transition hover:opacity-90"
            >
              Check Out
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}
