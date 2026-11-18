import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ExternalLink, Code2, GitFork, UserCheck, Sparkles, FolderGit2 } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'

export default function Connect() {
  return (
    <section className="py-20 relative z-10 border-t border-b border-white/[0.06] bg-[#0A0D15]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/25 text-accent-violet text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Professional Network &amp; Code
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Me</span>
          </h2>
          <p className="text-sm sm:text-base text-dark-muted mt-2">
            Explore my code repositories on GitHub and view my career milestones on LinkedIn.
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* GitHub Profile Card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#0E111A] border border-white/10 hover:border-accent-blue/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:text-accent-blue transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-dark-muted px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/5">
                  @yashthakre2415
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                GitHub Repositories
              </h3>
              <p className="text-sm text-dark-muted leading-relaxed mb-4">
                Explore the source code for my full-stack and backend projects, including the Solar Service Management System codebase.
              </p>

              {/* Verified Highlight Box */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono space-y-1.5 mb-6">
                <div className="text-slate-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-accent-blue">
                    <FolderGit2 className="w-3.5 h-3.5" /> Solar_backend
                  </span>
                  <span className="text-[10px] text-emerald-400">Node / MySQL</span>
                </div>
                <p className="text-dark-muted text-[11px] font-sans">
                  Structured MVC architecture with relational database design.
                </p>
              </div>
            </div>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-sm font-medium border border-white/10 hover:border-white/20 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
            </a>
          </motion.div>

          {/* LinkedIn Profile Card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#0E111A] border border-white/10 hover:border-[#0A66C2]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/30 text-[#0A66C2]">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Opportunities
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                LinkedIn Profile
              </h3>
              <p className="text-sm text-dark-muted leading-relaxed mb-4">
                Connect with me on LinkedIn to discuss software engineering roles, internship opportunities, or technical collaboration.
              </p>

              {/* Verified Highlight Box */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono space-y-1.5 mb-6">
                <div className="text-slate-300 flex items-center justify-between">
                  <span className="text-white font-medium">B.Tech in AI &amp; ML</span>
                  <span className="text-dark-muted">Class of 2026</span>
                </div>
                <p className="text-dark-muted text-[11px] font-sans">
                  Sagar Institute of Research and Technology (SIRT), Bhopal
                </p>
              </div>
            </div>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#0A66C2] hover:bg-[#095196] text-white text-sm font-medium shadow-lg shadow-blue-600/20 transition-all"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
