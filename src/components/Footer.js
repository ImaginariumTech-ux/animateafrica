"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-zinc-900">
          {/* Brand Info (Left) */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-white font-bold text-xl md:text-2xl tracking-tight">
                Animate Africa
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm font-medium text-zinc-500">
              A structured animation learning experience designed to take you from curiosity to real studio-level skills. Empowering the next generation of African creators.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a
                href="mailto:hello@magiclab.studio"
                className="text-sm font-semibold hover:text-white transition-colors duration-200"
              >
                hello@magiclab.studio
              </a>
            </div>
          </div>

          {/* Social Media Details (Right) */}
          <div className="md:col-span-7 flex flex-col md:items-end justify-center">
            <div className="space-y-4 text-left md:text-right">
              <h4 className="text-white text-[13px] font-bold tracking-wider uppercase">
                Connect With Us
              </h4>
              <ul className="space-y-3.5 text-[15px] font-semibold text-zinc-400">
                <li>
                  <a
                    href="https://youtube.com/@magiccarpetstudios?si=WEBeh9xUTwK_X84g"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <span>YouTube</span>
                    <span className="text-zinc-600 font-normal">@magiccarpetstudios</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/magiclabacademy?s=21"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <span>X</span>
                    <span className="text-zinc-600 font-normal">@magiclabacademy</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/magiclab_community?igsh=NzJzMzJleWNidW9y"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <span>Instagram</span>
                    <span className="text-zinc-600 font-normal">@magiclab_community</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-zinc-600">
          <p>© {new Date().getFullYear()} Animate Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
