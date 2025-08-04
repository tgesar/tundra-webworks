// app/about/page.tsx
'use client'

import React from 'react'

export default function AboutPage() {
  return (
    <main className="bg-background text-white font-sans">
      {/* Hero Slogan */}
      <section className="pt-16 pb-0 px-6 lg:px-24 flex justify-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-center leading-tight max-w-4xl">
          <span className="text-white">Your Vision,</span>{' '}
          <span className="text-secondary">Our Expertise</span>
        </h1>
      </section>

      {/* Intro: Image + Bio (moved closer to top) */}
      <section className="pt-0 pb-10 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Portrait */}
        <div className="lg:w-2/5 flex justify-center">
  <img
    src="/images/transparentpfp.png"
    alt="Trenzin Gesar"
    className="w-full max-w-[300px] lg:max-w-[400px] object-contain drop-shadow-2xl -mt-6"
  />
</div>


        {/* Right: Bio Text */}
        <div className="lg:w-3/5 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-semibold">
            Hi, I’m Trenzin!<br />— Founder of{' '}
            <span className="text-white">Tundra</span>{' '}
            <span className="text-secondary">Webworks</span>
          </h2>
          <p className="text-xl leading-relaxed">
            I grew up fascinated by technology—building my first website in
            college and discovering how code could bring ideas to life. After earning
            my B.A.Sc. in IT Security from the University of Minnesota, I launched
            Tundra Webworks to help businesses share their stories online.
          </p>
          <p className="text-xl leading-relaxed">
            We believe every business has a unique vision and deserves a site that
            reflects its values. From clean, user-friendly layouts to robust back-end
            integrations, our goal is to deliver digital solutions that drive growth
            and build trust.
          </p>
        </div>
      </section>

      {/* Goals / Morals Spacer */}
      <section className="py-10 bg-[#1f2125]" />

      {/* “Your Needs Fully Covered” Process */}
      <section className="py-20 px-6 lg:px-24 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-6xl lg:text-7xl font-bold">
            Your Needs <span className="text-secondary">Fully Covered</span>
          </h2>
          <p className="text-lg text-gray-300">
            From concept to completion, we deliver end-to-end web solutions
            tailored to your goals. Count on expert support and dependable
            service every step of the way.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-48">
          {/* Step 1 */}
          <div className="flex items-start gap-8">
            <img
              src="/images/requirements.png"
              alt="Requirements Gathering"
              className="w-28 md:w-32 object-contain flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                Requirements Gathering
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                We start by understanding your unique needs and business goals—
                conducting in-depth discovery to ensure every requirement is met
                from day one.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-8">
            <img
              src="/images/design.png"
              alt="Design"
              className="w-28 md:w-32 object-contain flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                Design
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                We craft intuitive, on-brand user interfaces—balancing aesthetics
                with usability to create engaging digital experiences.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-8">
            <img
              src="/images/development.png"
              alt="Implementation"
              className="w-28 md:w-32 object-contain flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                Implementation
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our engineers build scalable front-ends and secure back-ends
                using modern frameworks and APIs for top performance.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-8">
            <img
              src="/images/testing.png"
              alt="Testing & Deployment"
              className="w-28 md:w-32 object-contain flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                Testing & Deployment
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Rigorous QA checks and smooth Vercel deployments ensure your site
                launches flawlessly and stays reliable long-term.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
