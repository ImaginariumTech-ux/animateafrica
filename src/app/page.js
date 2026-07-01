"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="flex-1 flex flex-col bg-white">
      
      {/* Blue Hero Section */}
      <section id="hero" className="blue-hero-bg w-full text-white pt-36 pb-44 sm:pb-56 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center relative z-10 text-center">
          {/* Heading */}
          <ScrollReveal delay={100} variant="fade-up">
            <h1 className="text-5xl mt-5 sm:text-7xl font-medium tracking-tight text-white font-serif leading-[1.08] max-w-4xl text-center">
              Learn Animation Like{" "}
              <span className="block mt-1">You're Already Inside a</span>
              <span className="block mt-1">Studio</span>
            </h1>
          </ScrollReveal>

          {/* Paragraph */}
          <ScrollReveal delay={300} variant="fade-up">
            <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed text-center">
              A structured animation learning experience designed to take you from curiosity to real studio-level skills.
            </p>
          </ScrollReveal>

          {/* Bottom CTA */}
          <ScrollReveal delay={500} variant="fade-up">
            <div className="mt-10 flex items-center justify-center">
              <a
                href="https://selar.com/adventuresinanimation"
                className="group/btn flex items-center justify-center rounded-full bg-white border border-white/10 px-8 py-4 text-base font-semibold text-[#001e70] shadow-lg transition-all duration-300 hover:bg-zinc-100 active:scale-[0.98]"
              >
                Apply Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* White Section with Overlapping Video Player */}
      <section className="relative w-full bg-white pb-32 px-4 sm:px-6 lg:px-8">
        
        {/* Overlapping Video Player Container */}
        <div className="relative -mt-36 sm:-mt-48 z-20 w-full max-w-4xl mx-auto">
          {/* Custom premium shadow & glass frame readable on both blue & white backgrounds */}
          <ScrollReveal delay={600} variant="scale-up">
            <div className="p-3 rounded-3xl bg-white/20 border border-white/40 shadow-2xl shadow-zinc-950/15 backdrop-blur-md">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-950 group cursor-pointer shadow-inner">
                {!isPlaying ? (
                  <div onClick={() => setIsPlaying(true)} className="absolute inset-0 w-full h-full">
                    {/* Video Thumbnail */}
                    <img
                      src="https://img.youtube.com/vi/wePT7aKdgPM/maxresdefault.jpg"
                      alt="Animate Africa Showcase Thumbnail"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
                    />
                    
                    {/* Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                    {/* Pulsing Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-blue-600 shadow-2xl transition-transform duration-300 group-hover:scale-110 active:scale-95 relative">
                        <div className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-8 w-8 relative z-10 translate-x-0.5"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/wePT7aKdgPM?autoplay=1&start=6"
                    title="Animate Africa Showcase Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="relative w-full bg-white pb-32 px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="w-full max-w-5xl mx-auto mt-24 text-center">
          <ScrollReveal variant="fade-up">
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight font-serif text-zinc-950 leading-tight">
              More Than a Course.
              <span className="block text-[#004edd] mt-1">A Creative Studio Experience.</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Split Layout Cards */}
        <div className="w-full max-w-5xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Card: Showcase Image with overlay text */}
            <ScrollReveal variant="fade-left" className="md:col-span-8">
              <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[420px] flex flex-col justify-end p-8 sm:p-12 bg-zinc-900 group h-full">
                <img
                  src="/Magic Lab Student Picture.png"
                  alt="Studio workflow background"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
                
                {/* Deep Blue Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#002b9e]/90 via-[#004edd]/75 to-transparent" />
                
                {/* Overlay Text */}
                <div className="relative z-10 max-w-xl text-left">
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif leading-tight">
                    Real-World Workflows
                  </h3>
                  <p className="mt-4 text-white/95 text-sm sm:text-base leading-relaxed font-sans font-medium">
                    This programme combines structured learning, practical animation workflows, and industry-inspired guidance.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Card: Focus Areas list */}
            <ScrollReveal variant="fade-right" className="md:col-span-4">
              <div className="bg-white rounded-3xl border border-zinc-100 p-8 sm:p-12 shadow-xl shadow-zinc-200/10 flex flex-col justify-center min-h-[420px] h-full">
                <div>
                  <h3 className="text-2xl font-bold text-[#001e70] font-serif">
                    3D Animation Focus Area
                  </h3>
                  <ul className="mt-6 space-y-4 text-[15px] font-semibold text-[#004edd]">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#004edd] text-lg select-none leading-none">•</span>
                      <span>Introduction to 3D Animation</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#004edd] text-lg select-none leading-none">•</span>
                      <span>3D Animation Fundamentals</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#004edd] text-lg select-none leading-none">•</span>
                      <span>Practical Learning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Practical Learning Section */}
      <section id="curriculum" className="relative w-full bg-[#fdfbf7]/40 pb-32 px-4 sm:px-6 lg:px-8 border-t border-zinc-100">
        
        {/* Section Header */}
        <div className="w-full max-w-5xl mx-auto mt-24 text-center">
          <ScrollReveal variant="fade-up">
            <div className="inline-flex items-center gap-2 justify-center">
              <span className="h-2.5 w-2.5 rounded-sm bg-blue-600 shrink-0" />
              <span className="font-mono tracking-widest text-[11px] font-bold text-blue-600 uppercase">
                Curriculum Layout
              </span>
            </div>
            <h2 className="mt-6 text-4xl sm:text-5xl font-medium tracking-tight font-serif text-zinc-950 leading-tight">
              Practical Learning Within Reach
            </h2>
            <p className="mt-4 text-zinc-500 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
              Animate Africa provides a structured, mentor-led pathway designed to support your schedule and accelerate your animation journey.
            </p>
          </ScrollReveal>
        </div>

        {/* 3-Card Grid */}
        <div className="w-full max-w-5xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Structured Path */}
            <ScrollReveal variant="fade-up" delay={100}>
              <div className="bg-white rounded-3xl border border-zinc-200/50 p-8 sm:p-10 shadow-xl shadow-zinc-200/5 flex flex-col items-start gap-4 min-h-[280px] h-full">
                <h3 className="text-2xl font-bold text-[#001e70] font-serif text-left">
                  Structured Path
                </h3>
                <p className="text-zinc-500 font-medium text-sm leading-relaxed text-left">
                  <span className="text-zinc-800 font-bold block mb-1">
                    Beginner-to-intermediate learning path designed for growth.
                  </span>
                  Master the fundamental mechanics of character animation, timing, and storytelling through clear, linear modules.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2: Flexible Options */}
            <ScrollReveal variant="fade-up" delay={250}>
              <div className="bg-white rounded-3xl border border-zinc-200/50 p-8 sm:p-10 shadow-xl shadow-zinc-200/5 flex flex-col items-start gap-4 min-h-[280px] h-full">
                <h3 className="text-2xl font-bold text-[#001e70] font-serif text-left">
                  Flexible Options
                </h3>
                <p className="text-zinc-500 font-medium text-sm leading-relaxed text-left">
                  <span className="text-zinc-800 font-bold block mb-1">
                    Choose the learning style that fits your life and goals.
                  </span>
                  Balance your training with part-time schedules, self-paced learning, or intense cohort sessions.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3: Community Driven */}
            <ScrollReveal variant="fade-up" delay={400}>
              <div className="bg-white rounded-3xl border border-zinc-200/50 p-8 sm:p-10 shadow-xl shadow-zinc-200/5 flex flex-col items-start gap-4 min-h-[280px] h-full">
                <h3 className="text-2xl font-bold text-[#001e70] font-serif text-left">
                  Community Driven
                </h3>
                <p className="text-zinc-500 font-medium text-sm leading-relaxed text-left">
                  <span className="text-zinc-800 font-bold block mb-1">
                    Grow alongside other creators and future animators.
                  </span>
                  Engage in group critique sessions, build collaborative short films, and tap into a lifelong creative network.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative w-full bg-white pb-32 px-4 sm:px-6 lg:px-8 border-t border-zinc-100">
        
        {/* Section Header */}
        <div className="w-full max-w-5xl mx-auto mt-24 text-center">
          <ScrollReveal variant="fade-up">
            <div className="inline-flex items-center gap-2 justify-center">
              <span className="h-2.5 w-2.5 rounded-sm bg-blue-600 shrink-0" />
              <span className="font-mono tracking-widest text-[11px] font-bold text-blue-600 uppercase">
                Pricing & Plan
              </span>
            </div>
            <h2 className="mt-6 text-4xl sm:text-5xl font-medium tracking-tight font-serif text-zinc-950 leading-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-zinc-500 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
              Start building your animation career today. Learn at your own pace with structured, studio-level modules.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Cards Container */}
        <div className="w-full max-w-md mx-auto mt-16">
          
          {/* Card: Self-Paced */}
          <ScrollReveal variant="scale-up" delay={200}>
            <div className="bg-[#faf8f5]/40 border border-zinc-200/50 rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[460px] shadow-xl shadow-zinc-200/5 relative">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#001e70] font-sans">
                    Self-Paced
                  </h3>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-7xl font-extrabold text-zinc-900 tracking-tight font-sans">FREE</span>
                  </div>
                </div>
                
                <div className="border-t border-zinc-200/60 pt-6">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">What's included:</h4>
                  <ul className="space-y-3.5 text-sm font-semibold text-zinc-700">
                    <li className="flex items-start gap-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-blue-600 shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>Access to a 3D animation course</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-blue-600 shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>Learn at your pace</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-blue-600 shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>3-Month Duration</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100">
                <a
                  href="https://selar.com/adventuresinanimation"
                  className="block w-full text-center rounded-full bg-[#001e70] py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#001757] transition-all duration-300 active:scale-[0.98]"
                >
                  Join Now
                </a>
              </div>
            </div>
          </ScrollReveal>
          
        </div>
      </section>

      {/* Grid CTA Section */}
      <section id="cta" className="relative w-full bg-white py-36 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 overflow-hidden flex flex-col items-center justify-center">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-80 pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          {/* Title */}
          <ScrollReveal variant="fade-up">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#001e70] font-sans leading-[1.1] max-w-3xl">
              For the Dreamers, Creators, and Future Animators
            </h2>
          </ScrollReveal>
          
          {/* Subtitle */}
          <ScrollReveal variant="fade-up" delay={150}>
            <p className="mt-8 text-zinc-500 max-w-2xl text-lg sm:text-xl font-medium leading-relaxed">
              Adventures in Animation gives you the environment to begin confidently. No intimidating barriers. Just structured learning.
            </p>
          </ScrollReveal>
          
          {/* Buttons */}
          <ScrollReveal variant="fade-up" delay={300}>
            <div className="mt-10 flex items-center justify-center">
              <a
                href="https://selar.com/adventuresinanimation"
                className="group/btn flex items-center justify-center rounded-full bg-zinc-950 border border-zinc-950 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-zinc-900 active:scale-[0.98]"
              >
                Apply Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
