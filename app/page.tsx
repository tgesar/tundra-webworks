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
      {/* Hero Section */}
      <section
        className="
          flex flex-col-reverse lg:flex-row
          items-center justify-center
          h-screen px-6 lg:px-24
          bg-background overflow-hidden
        "
      >
        {/* Left */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Building websites <span className="text-[#8e84ff]">the right way.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            At Tundra Webworks, we design and build robust, full-stack websites that
            empower businesses, brands, and individuals to grow their platforms and
            connect with their audiences. From pixel-perfect UI/UX to secure,
            scalable back-ends, we deliver tailor-made solutions that inspire trust
            and drive real results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services">
              <button className="btn bg-[#8e84ff] text-white">
                Get Started
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn bg-white text-[#8e84ff]">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right: transparentHome image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="/images/transparentHome.png"
            alt="Web design showcase"
            className="
              static
              w-[140%]        /* mobile: ~3.5× larger */
              md:w-[30rem]    /* tablet+ */
              lg:w-[825px]    /* desktop */
              mx-auto         /* center on mobile */
              object-contain drop-shadow-2xl
              transform translate-x-[48px] -translate-y-[15px]
            "
          />
        </div>
      </section>

      {/* Marquee Section */}
      <section className="w-full bg-[#8e84ff] bg-opacity-60 py-16">
        <h3 className="text-center text-white text-2xl font-medium mb-8">
          Trusted tools you know
        </h3>
        <div className="marquee mx-auto max-w-4xl overflow-hidden">
          <div className="marquee__track flex gap-12">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={`/images/${logo}`}
                alt=""
                className="w-20 opacity-70 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blank Spacer */}
      <div className="h-20" />

      {/* Why Choose Tundra Webworks */}
      <section className="w-full bg-background py-20 px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Animated GIF */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/animatedweb.gif"
              alt="Animated web demo"
              className="
                w-[140%]        /* mobile: ~3.5× larger */
                md:w-[30rem]    /* tablet+ */
                mx-auto         /* center on mobile */
                object-contain
              "
            />
          </div>
          {/* Right: Stacked heading & bullets */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Why Choose
              </h2>
              <h2 className="text-5xl lg:text-6xl font-semibold text-[#8e84ff] leading-tight">
                Tundra Webworks
              </h2>
            </div>
            <ul className="list-disc list-inside text-xl lg:text-xl text-white space-y-8">
              <li>
                <strong>Custom-Tailored UX & Design</strong> – We build unforgettable
                user experiences with intuitive flows and brand-cohesive visuals that
                captivate and convert.
              </li>
              <li>
                <strong>Full-Stack Performance & Reliability</strong> – From
                lightning-fast Next.js front ends to scalable Node.js back ends, every
                line of code is optimized for uptime and speed.
              </li>
              <li>
                <strong>Transparent Collaboration & Ongoing Support</strong> – Clear
                milestones, open communication, and post-launch care ensure you always
                feel in control.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
