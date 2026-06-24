"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 shadow-md border-b border-white/10 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo (Left) */}
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* NexCRM style logo icon */}
            <div className="flex items-center text-white font-bold text-xl md:text-2xl tracking-tight">
              Animate Africa
            </div>
          </Link>

          {/* Navigation Links (Center - Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-white/95">
            <Link
              href="#about"
              className="hover:text-white/80 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#curriculum"
              className="hover:text-white/80 transition-colors"
            >
              Curriculum
            </Link>
            <Link
              href="#pricing"
              className="hover:text-white/80 transition-colors"
            >
              Pricing
            </Link>
            <a
              href="https://magiclab.studio"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white/80 transition-colors"
            >
              MagicLab
            </a>
          </nav>

          {/* CTA Button (Right - Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              href="#pricing"
              className="group/btn flex items-center gap-3.5 rounded-full border border-white/10 bg-black/40 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-black/60 hover:border-white/20 active:scale-[0.98]"
            >
              Apply Now
              <div className="h-4 w-[1px] bg-white/20" />
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen border-b border-white/10 bg-zinc-950/95 backdrop-blur-lg"
            : "max-h-0 overflow-hidden"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1.5 px-4 pb-6 pt-3">
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-white/10"
          >
            About Us
          </Link>
          <Link
            href="#curriculum"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-white/10"
          >
            Curriculum
          </Link>
          <Link
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-white/10"
          >
            Pricing
          </Link>
          <a
            href="https://magiclab.studio"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-white/10"
          >
            MagicLab
          </a>
          <div className="pt-4 border-t border-white/10 mt-4 px-3">
            <Link
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-3.5 rounded-full border border-white/10 bg-black/40 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-black/60"
            >
              Apply Now
              <div className="h-4 w-[1px] bg-white/20" />
              <div className="grid grid-cols-2 gap-0.5 opacity-80">
                <div className="h-1 w-1 rounded-full bg-white" />
                <div className="h-1 w-1 rounded-full bg-white" />
                <div className="h-1 w-1 rounded-full bg-white" />
                <div className="h-1 w-1 rounded-full bg-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
