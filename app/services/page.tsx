// app/services/page.tsx
'use client'

export default function ServicesPage() {
  const packages = [
    {
      name: 'Starter',
      price: '$450',
      ribbon: 'Great for new brands',
      blurb:
        'Clean, responsive site to get you online fast with on-brand visuals and essentials.',
      features: [
        'Front-end only, up to 5 responsive pages',
        'Clean branding & layout',
        'Google Maps embed',
        'Subtle UX hover & scroll effects',
        'Domain purchase available (additional cost)',
      ],
      cta: 'Check Out',
      link: 'https://www.paypal.com/ncp/payment/E2S4VQYD4KGBA',
      highlight: false,
    },
    {
      name: 'Standard',
      price: '$1,000',
      ribbon: 'Most Popular',
      blurb:
        'Full-stack build with booking + messaging—ready to capture leads 24/7.',
      features: [
        'Up to 7 pages with full-stack development',
        'Google Calendar booking system integration',
        'Automated contact form → email alert',
        'Animated transitions & custom visuals',
        'Domain purchase available (additional cost)',
      ],
      cta: 'Check Out',
      link: 'https://www.paypal.com/ncp/payment/MD2UGWVYFVJ4Y',
      highlight: true,
    },
    {
      name: 'Pro',
      price: '$2,500',
      ribbon: 'Scale & Automate',
      blurb:
        'Advanced automations, galleries, and support tools—built to grow with you.',
      features: [
        'Up to 10 pages & advanced back-end features',
        'Full booking + automated review prompts',
        'Email signups & newsletter integration',
        'Chatbot for 24/7 user support',
        'Premium design, media galleries & menus',
      ],
      cta: 'Check Out',
      link: 'https://www.paypal.com/ncp/payment/Z5BQ2N7AGX6GQ',
      highlight: false,
    },
  ]

  return (
    <main className="bg-background text-white font-sans">
      {/* ======= Hero ======= */}
      <section className="relative overflow-hidden">
        {/* star specks */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]
          [background-image:radial-gradient(2px_2px_at_25%_35%,#fff_0,#fff_40%,transparent_41%),radial-gradient(1.5px_1.5px_at_70%_65%,#fff_0,#fff_40%,transparent_41%)]
          bg-[length:900px_900px,1100px_1100px] bg-repeat"
        />
        {/* vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_120%,transparent,transparent,rgba(0,0,0,.55))]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Premium Services <span className="text-[#8e84ff]">at Fair Prices</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Smart, conversion-focused websites with seamless booking and
            customer-friendly UX—built to grow your business.
          </p>
        </div>
      </section>

      {/* ======= Pricing Cards ======= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {packages.map((p) => (
              <article
                key={p.name}
                className={[
                  'relative rounded-3xl p-[1px] transition-transform',
                  p.highlight
                    ? 'bg-gradient-to-b from-[#8e84ff] to-transparent hover:scale-[1.02]'
                    : 'bg-white/10 hover:scale-[1.01]',
                ].join(' ')}
              >
                {/* card body */}
                <div className="rounded-3xl h-full bg-[#1f2125]/80 backdrop-blur-sm p-8 flex flex-col">
                  {/* ribbon */}
                  <div className="h-6 mb-4">
                    {p.ribbon && (
                      <span
                        className={[
                          'inline-block px-3 py-1 text-xs tracking-wide rounded-full border',
                          p.highlight
                            ? 'bg-[#8e84ff]/20 border-[#8e84ff]/40 text-[#d9d6ff]'
                            : 'bg-white/5 border-white/15 text-gray-200',
                        ].join(' ')}
                      >
                        {p.ribbon}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold">{p.name}</h3>

                  <div className="mt-2 text-5xl font-extrabold">{p.price}</div>
                  <p className="mt-3 text-gray-300">{p.blurb}</p>

                  <ul className="mt-6 space-y-3 text-base leading-relaxed">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex gap-2">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke={p.highlight ? '#8e84ff' : '#bdb9ff'}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span className="text-gray-200">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      'mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold',
                      'transition focus:outline-none focus:ring-2 focus:ring-offset-0',
                      p.highlight
                        ? 'bg-[#8e84ff] text-white hover:opacity-90'
                        : 'bg-white text-[#1f2125] hover:opacity-90',
                    ].join(' ')}
                  >
                    {p.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* small reassurance row */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="rounded-xl border border-white/10 bg-white/5 py-4 text-gray-300">
              Mobile-first
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 py-4 text-gray-300">
              SEO-ready
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 py-4 text-gray-300">
              24/7 Booking
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 py-4 text-gray-300">
              Fast Hosting
            </div>
          </div>
        </div>
      </section>

      {/* ======= FAQ (no JS, native details) ======= */}
      <section className="border-t border-white/10 bg-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="rounded-2xl border border-white/10 bg-[#1f2125]/70 p-5">
              <summary className="cursor-pointer font-semibold">
                How long does a typical project take?
              </summary>
              <p className="mt-3 text-gray-300">
                Starter sites are often finished in 1–2 weeks. Standard and Pro builds
                range from 3–6 weeks, depending on content, features, and feedback speed.
              </p>
            </details>

            <details className="rounded-2xl border border-white/10 bg-[#1f2125]/70 p-5">
              <summary className="cursor-pointer font-semibold">
                Do you help with domains and hosting?
              </summary>
              <p className="mt-3 text-gray-300">
                Yes. We’ll guide you through purchasing a domain (if needed) and handle
                fast, secure hosting for the final site.
              </p>
            </details>

            <details className="rounded-2xl border border-white/10 bg-[#1f2125]/70 p-5">
              <summary className="cursor-pointer font-semibold">
                Can my site take bookings and send emails automatically?
              </summary>
              <p className="mt-3 text-gray-300">
                Absolutely. Standard and Pro include booking flows and automated emails.
                Pro adds review prompts and advanced automations.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ======= CTA band ======= */}
      <section className="w-full bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/90 text-lg md:text-xl">
            Not sure which plan fits? I’ll recommend the best option for your goals.
          </p>
          <a
  href="/contact"
  className="btn bg-[#8e84ff] text-white hover:opacity-90 rounded-full px-6 py-3 font-semibold"
>
  Email Me
</a>

        </div>
      </section>
    </main>
  )
}
