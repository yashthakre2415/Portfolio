import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Heart, Code2 } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#07080D] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-display font-bold text-white text-xs">
                YT
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-dark-muted mt-2 max-w-sm">
              Aspiring Software Developer passionate about practical web applications, scalable APIs, and structured full-stack architectures.
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-accent-blue/40 text-slate-300 hover:text-white transition-all hover:scale-105"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-accent-blue/40 text-slate-300 hover:text-white transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 text-xs font-mono text-slate-300 hover:text-white transition-all hover:scale-105"
              aria-label="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-dark-muted">
          <div>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Crafted with React, Tailwind CSS &amp; Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
