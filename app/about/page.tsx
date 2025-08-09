// app/about/page.tsx
'use client'

export default function AboutPage() {
  return (
    <main className="bg-background text-white font-sans">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Subtle starfield */}
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

        {/* Header line */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-2 flex justify-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-center leading-tight max-w-4xl">
            <span className="text-white">Your Vision,</span>{' '}
            <span className="text-[#8e84ff]">Our Expertise</span>
          </h1>
        </div>

        {/* Intro: Portrait + Bio */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-4 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Portrait with glow */}
            <div className="w-full flex justify-center">
              <div className="relative w-full max-w-[420px]">
                {/* Glow behind portrait */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                  <div className="w-[85%] aspect-square rounded-full blur-3xl opacity-40
                                  bg-[radial-gradient(circle_at_55%_45%,#8e84ff_0%,transparent_60%)]" />
                </div>

                <img
                  src="/images/transparentpfp.png"
                  alt="Trenzin Gesar"
                  className="w-full object-contain drop-shadow-[0_30px_80px_rgba(142,132,255,.35)] -mt-6"
                />
              </div>
            </div>

            {/* Right: Bio text */}
            <div className="lg:pl-4 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-semibold">
                Hi, I’m Trenzin!<br />— Founder of{' '}
                <span className="text-white">Tundra</span>{' '}
                <span className="text-[#8e84ff]">Webworks</span>
              </h2>

              <p className="text-xl leading-relaxed text-gray-200">
                I grew up fascinated by technology—building my first website in
                college and discovering how code could bring ideas to life. After earning
                my B.A.Sc. in IT Security from the University of Minnesota, I launched
                Tundra Webworks to help businesses share their stories online.
              </p>

              <p className="text-xl leading-relaxed text-gray-300">
                We believe every business has a unique vision and deserves a site that
                reflects its values. From clean, user-friendly layouts to robust back-end
                integrations, our goal is to deliver digital solutions that drive growth
                and build trust.
              </p>

              {/* Quick badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">Minnesota-based</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">Full-stack • Next.js</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">Booking & Payments</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">SEO & Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider band */}
      <section className="py-10 bg-[#1f2125]" />

      {/* ================= PROCESS ================= */}
      <section className="py-20 px-6 lg:px-24">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-6xl lg:text-7xl font-bold">
            Your Needs <span className="text-[#8e84ff]">Fully Covered</span>
          </h2>
          <p className="text-lg text-gray-300">
            From concept to completion, we deliver end-to-end web solutions
            tailored to your goals. Count on expert support and dependable
            service every step of the way.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Step 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm flex items-start gap-6">
            <img
              src="/images/requirements.png"
              alt="Requirements Gathering"
              className="w-24 md:w-28 object-contain flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                Requirements Gathering
              </h3>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                We start by understanding your unique needs and business goals—
                conducting in-depth discovery to ensure every requirement is
                met from day one.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm flex items-start gap-6">
            <img
              src="/images/design.png"
              alt="Design"
              className="w-24 md:w-28 object-contain flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                Design
              </h3>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                We craft intuitive, on-brand user interfaces—balancing aesthetics
                with usability to create engaging digital experiences.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm flex items-start gap-6">
            <img
              src="/images/development.png"
              alt="Implementation"
              className="w-24 md:w-28 object-contain flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                Implementation
              </h3>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                We build scalable front-ends and secure back-ends using modern
                frameworks and APIs for top performance.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm flex items-start gap-6">
            <img
              src="/images/testing.png"
              alt="Testing & Deployment"
              className="w-24 md:w-28 object-contain flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                Testing & Deployment
              </h3>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
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
