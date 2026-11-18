import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Track scroll position for backdrop blur and active spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25)

      // Section spy
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07080D]/80 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-blue-500/20">
              <div className="w-full h-full bg-[#0E111A] rounded-[10px] flex items-center justify-center font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 tracking-wider">
                YT
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-base tracking-tight group-hover:text-accent-blue transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-dark-muted tracking-wide flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available to hire
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] px-3 py-1.5 rounded-full backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-dark-muted hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-violet-600/30 border border-blue-500/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              )
            })}
          </nav>

          {/* Action Buttons: Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/10"
              aria-label="Open Yash Thakre's Resume"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-accent-blue/15 border border-accent-blue/30 text-accent-blue flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-dark-muted hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-white/10 bg-[#07080D]/95 backdrop-blur-xl px-4 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-blue-600/15 border border-blue-500/30 text-white'
                        : 'text-dark-muted hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                )
              })}

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenResume()
                  }}
                  className="w-full py-3 rounded-xl font-medium text-center bg-gradient-to-r from-blue-600 to-violet-600 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  <FileText className="w-4 h-4" />
                  View & Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
