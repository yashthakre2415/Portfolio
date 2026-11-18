import React, { useState } from 'react'
import Navbar from './components/Navbar'
import BackgroundEffects from './components/BackgroundEffects'
import CustomCursor from './components/CustomCursor'
import ResumeModal from './components/ResumeModal'
import ScrollToTop from './components/ScrollToTop'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Connect from './sections/Connect'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-dark-bg text-dark-text selection:bg-accent-violet/30 selection:text-white font-sans">
      {/* Non-intrusive Custom Glow Cursor for Desktop */}
      <CustomCursor />

      {/* Animated Subtle Background Grid, Vignette & Ambient Glow Orbs */}
      <BackgroundEffects />

      {/* Sticky Translucent Navbar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Page Content */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Connect />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <ScrollToTop />

      {/* Resume & Profile Sheet Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  )
}
