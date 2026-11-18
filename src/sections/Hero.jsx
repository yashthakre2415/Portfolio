import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  Terminal, 
  Code2, 
  Sparkles,
  Layers,
  Database,
  Cpu
} from 'lucide-react'
import { personalInfo } from '../data/personalInfo'

export default function Hero() {
  // Typewriter effect state
  const roles = personalInfo.typewriterRoles
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')

  useEffect(() => {
    const fullRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 45 : 90

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullRole.substring(0, currentText.length + 1))
        if (currentText.length + 1 === fullRole.length) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        // Backspacing
        setCurrentText(fullRole.substring(0, currentText.length - 1))
        if (currentText.length - 1 === 0) {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentRoleIndex, roles])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio, Typewriter, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                B.Tech in Artificial Intelligence & Machine Learning (2026)
              </span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.1]">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">Yash Thakre</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-400 font-medium pt-1">
                Aspiring Software Developer | B.Tech in Artificial Intelligence and Machine Learning
              </p>

              {/* Typewriter Banner */}
              <div className="h-10 sm:h-12 flex items-center pt-2">
                <span className="text-xl sm:text-2xl md:text-3xl font-mono font-semibold text-slate-200">
                  I build as a{' '}
                  <span className="text-accent-cyan underline decoration-accent-blue/50 decoration-2 underline-offset-4">
                    {currentText}
                  </span>
                  <span className="inline-block w-[3px] h-6 sm:h-7 bg-accent-blue ml-1 animate-pulse align-middle" />
                </span>
              </div>
            </motion.div>

            {/* Short Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-dark-muted max-w-2xl leading-relaxed"
            >
              I&apos;m a B.Tech graduate passionate about building practical web applications and solving real-world problems through technology. I enjoy developing full-stack applications, working with APIs and databases, and continuously improving my development skills.
            </motion.p>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* View Projects */}
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white font-medium text-sm shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Contact Me */}
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm border border-white/10 hover:border-white/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-accent-cyan" />
                <span>Contact Me</span>
              </button>

              {/* GitHub Profile Button */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-sm border border-white/10 transition-all duration-200 hover:border-accent-blue/40"
                aria-label="Visit Yash Thakre's GitHub Profile"
              >
                <Github className="w-4 h-4 text-slate-200" />
                <span className="hidden sm:inline">GitHub</span> Profile
              </a>

              {/* LinkedIn Profile Button */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-sm border border-white/10 transition-all duration-200 hover:border-accent-blue/40"
                aria-label="Visit Yash Thakre's LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span className="hidden sm:inline">LinkedIn</span> Profile
              </a>
            </motion.div>

            {/* Quick Metrics / Focus Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="pt-6 border-t border-white/[0.07] grid grid-cols-3 gap-4 max-w-lg"
            >
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-white">2026</p>
                <p className="text-xs text-dark-muted font-mono">B.Tech AIML Grad</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-accent-cyan">6.83</p>
                <p className="text-xs text-dark-muted font-mono">CGPA / 10</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-accent-violet">Full Stack</p>
                <p className="text-xs text-dark-muted font-mono">MERN & APIs</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Elegant Developer Visual (Terminal & Architecture Window) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-lg"
            >
              {/* Outer Decorative Glow Rings */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl blur-xl opacity-30 animate-pulse-slow" />

              {/* Developer Code Console Card */}
              <div className="relative rounded-2xl bg-[#0D1017]/90 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
                
                {/* Window Titlebar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#090B10] border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  
                  {/* Console Tabs */}
                  <div className="flex items-center gap-1 font-mono text-xs">
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`px-3 py-1 rounded-md transition-colors ${
                        activeTab === 'profile'
                          ? 'bg-white/10 text-white font-medium'
                          : 'text-dark-muted hover:text-white'
                      }`}
                    >
                      developer.json
                    </button>
                    <button
                      onClick={() => setActiveTab('terminal')}
                      className={`px-3 py-1 rounded-md transition-colors ${
                        activeTab === 'terminal'
                          ? 'bg-white/10 text-white font-medium'
                          : 'text-dark-muted hover:text-white'
                      }`}
                    >
                      server.js
                    </button>
                  </div>

                  <div className="text-[11px] font-mono text-dark-muted hidden sm:block">
                    Node.js v26
                  </div>
                </div>

                {/* Console Content */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto min-h-[300px]">
                  {activeTab === 'profile' ? (
                    <div className="space-y-1.5">
                      <div className="text-slate-500">// Candidate Profile Object</div>
                      <div>
                        <span className="text-accent-violet">const</span>{' '}
                        <span className="text-blue-400">softwareEngineer</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">name:</span>{' '}
                        <span className="text-amber-300">&quot;Yash Thakre&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">degree:</span>{' '}
                        <span className="text-amber-300">&quot;B.Tech in AI &amp; ML&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">institution:</span>{' '}
                        <span className="text-amber-300">&quot;SIRT Bhopal (2026)&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">coreFocus:</span> [
                        <span className="text-cyan-300">&quot;Full Stack&quot;</span>,{' '}
                        <span className="text-cyan-300">&quot;MERN&quot;</span>,{' '}
                        <span className="text-cyan-300">&quot;REST APIs&quot;</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">databaseEngines:</span> [
                        <span className="text-emerald-300">&quot;MongoDB&quot;</span>,{' '}
                        <span className="text-emerald-300">&quot;MySQL&quot;</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">activeRepo:</span>{' '}
                        <span className="text-amber-300">&quot;Solar_backend&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">availableForWork:</span>{' '}
                        <span className="text-emerald-400">true</span>
                      </div>
                      <div>&#125;;</div>
                      
                      <div className="pt-2 text-slate-500">
                        <span className="text-emerald-400">&#10003;</span> Ready for full-stack &amp; backend roles
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <div className="text-slate-500">// Solar Backend Architecture Entrypoint</div>
                      <div>
                        <span className="text-accent-violet">import</span> express{' '}
                        <span className="text-accent-violet">from</span>{' '}
                        <span className="text-amber-300">&apos;express&apos;</span>;
                      </div>
                      <div>
                        <span className="text-accent-violet">const</span> app = express();
                      </div>
                      <div className="pt-1 text-slate-500">// Structured MVC routing &amp; db pools</div>
                      <div>
                        app.use(<span className="text-amber-300">&apos;/api/solar&apos;</span>, solarRoutes);
                      </div>
                      <div>
                        app.use(<span className="text-amber-300">&apos;/api/auth&apos;</span>, authRoutes);
                      </div>
                      <div className="pt-2">
                        app.listen(<span className="text-purple-300">5000</span>, () =&gt; &#123;
                      </div>
                      <div className="pl-4 text-emerald-400">
                        console.log(<span className="text-amber-300">&apos;Server active on port 5000&apos;</span>);
                      </div>
                      <div>&#125;);</div>
                    </div>
                  )}
                </div>

                {/* Console Footer Status */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#090B10] border-t border-white/[0.08] text-[11px] font-mono text-dark-muted">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>MVC Backend Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>REST API Ready</span>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements around the code card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-[#131722]/90 border border-white/10 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-mono text-white"
              >
                <Database className="w-4 h-4 text-emerald-400" />
                <span>MySQL &bull; MongoDB</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-3.5 py-2 rounded-xl bg-[#131722]/90 border border-white/10 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-mono text-white"
              >
                <Layers className="w-4 h-4 text-accent-blue" />
                <span>MERN Full-Stack</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
