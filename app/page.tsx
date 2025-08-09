// app/page.tsx
'use client'

import Link from 'next/link'

const logos = [
  'javascript.svg',
  'html5.svg',
  'tsnode.svg',
  'nextdotjs.svg',
  'react.svg',
  'tailwindcss.svg',
  'css.svg',
]

export default function HomePage() {
  return (
    <>
      {/* ================= HERO — SpaceX-style ================= */}
      <section className="relative overflow-hidden bg-background">
        {/* Starfield (very subtle) */}
        <div
          className="
            pointer-events-none absolute inset-0 opacity-[0.06]
            [background-image:radial-gradient(2px_2px_at_20%_30%,#fff_0,#fff_40%,transparent_41%),radial-gradient(1.5px_1.5px_at_70%_60%,#fff_0,#fff_40%,transparent_41%),radial-gradient(1.5px_1.5px_at_40%_80%,#fff_0,#fff_40%,transparent_41%)]
            bg-[length:800px_800px,900px_900px,1100px_1100px]
            bg-repeat
          "
        />

        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_120%,transparent,transparent,rgba(0,0,0,.6))]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-[92vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-center">
            {/* Left — Headline */}
            <div className="relative z-10 flex flex-col justify-center">
              <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold tracking-tight text-white leading-[1.05] mb-6">
                Turning <span className="text-[#8e84ff]">Clicks</span> Into{' '}
                <span className="text-[#8e84ff]">Customers</span>.
              </h1>

              <p className="text-[clamp(1rem,2.2vw,1.25rem)] text-gray-300 leading-relaxed max-w-xl mb-8">
                We craft conversion-focused websites that feel fast, look
                world-class, and quietly guide visitors to book, buy, or reach
                out. Built on modern tech, tuned for real business results.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/services">
                  <button className="btn bg-[#8e84ff] text-white hover:opacity-90 text-lg px-6 py-3">
                    Get Started
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="btn bg-white text-[#8e84ff] hover:opacity-90 text-lg px-6 py-3">
                    Talk to Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Right — “planet” image with glow */}
            <div className="relative">
              {/* Glow disk behind image */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-[70vw] max-w-[700px] aspect-square rounded-full blur-3xl opacity-40
                                bg-[radial-gradient(circle_at_55%_45%,#8e84ff_0%,transparent_60%)]" />
              </div>

              <div className="w-full flex justify-center">
                <img
                  src="/images/transparentHome.png"
                  alt="Web design showcase"
                  className="
                    w-[145%] md:w-[36rem] lg:w-[44rem]
                    object-contain drop-shadow-[0_30px_80px_rgba(142,132,255,.35)]
                    lg:translate-x-[24px]
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOOLS RIBBON (centered) ================= */}
      <section className="w-full bg-[#8e84ff]/60 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-center text-white text-xl md:text-2xl font-medium mb-6">
            Trusted tools you know
          </h3>

          {/* short, centered marquee */}
          <div className="relative overflow-hidden mx-auto">
            <div
              className="
                flex gap-12 items-center
                animate-[marquee_18s_linear_infinite]
                will-change-transform
              "
            >
              {[...logos, ...logos].map((logo, i) => (
                <img
                  key={i}
                  src={`/images/${logo}`}
                  alt=""
                  className="w-16 md:w-20 opacity-70 flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* breathing room */}
      <div className="h-20" />

      {/* ================= WHY TUNDRA ================= */}
      <section className="w-full bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Animated GIF */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[560px]">
                <img
                  src="/images/animatedweb.gif"
                  alt="Animated web demo"
                  className="w-[140%] md:w-[30rem] lg:w-full object-contain mx-auto"
                />
              </div>
            </div>

            {/* Right: Title + cards */}
            <div>
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                  Why Choose
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#8e84ff] leading-tight">
                  Tundra Webworks
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                    Custom-Tailored UX & Design
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    On-brand visuals and intuitive flows that reduce friction and
                    increase conversions—crafted for your audience.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                    Full-Stack Performance
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Lightning-fast Next.js front-ends with scalable back-ends and
                    modern APIs—built for reliability and speed.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:col-span-2">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                    Clear Process & Ongoing Support
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Transparent milestones, open communication, and post-launch care
                    so you always feel in control—from day one to growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* little proof row */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-gray-300">
            <div className="bg-white/5 border border-white/10 rounded-xl py-4">Mobile-first</div>
            <div className="bg-white/5 border border-white/10 rounded-xl py-4">SEO-ready</div>
            <div className="bg-white/5 border border-white/10 rounded-xl py-4">24/7 Booking</div>
            <div className="bg-white/5 border border-white/10 rounded-xl py-4">Fast Hosting</div>
          </div>
        </div>
      </section>

      {/* ================= CTA BAND ================= */}
      <section className="w-full bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/90 text-lg md:text-xl">
            Have a project in mind? Let’s make it happen.
          </p>
          <Link href="/services">
            <button className="btn bg-[#8e84ff] text-white hover:opacity-90">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}
