import React from 'react'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  Code, 
  Server, 
  Database, 
  Compass, 
  Award,
  Layers,
  CheckCircle2
} from 'lucide-react'
import { personalInfo } from '../data/personalInfo'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/25 text-accent-violet text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Background &amp; Academic Foundation
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-dark-muted mt-4 leading-relaxed"
          >
            A dedicated engineer with an academic background in Artificial Intelligence &amp; Machine Learning, focusing on robust software development and real-world web systems.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Professional Introduction & Philosophy */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0E111A]/80 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-accent-blue/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-accent-cyan" />
                Engineering Perspective
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a <strong className="text-white">B.Tech graduate in Artificial Intelligence and Machine Learning</strong> who is enthusiastic about software development, full-stack web engineering, building secure APIs, and integrating structured databases.
                </p>
                <p className="text-dark-muted">
                  During my engineering studies, I discovered a strong affinity for practical software architecture: designing clean RESTful services, organizing backend logic using the MVC pattern, and developing smooth, responsive frontends in React.
                </p>
                <p className="text-dark-muted">
                  I believe in continuous learning, disciplined problem-solving, and writing readable, maintainable code rather than relying on shortcuts.
                </p>
              </div>

              {/* Core Interests Tags */}
              <div className="pt-6 border-t border-white/[0.08] mt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-dark-muted mb-3">Core Engineering Focus</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Full-Stack Web Development",
                    "REST API Design",
                    "Relational & NoSQL Databases",
                    "MVC Backend Architecture",
                    "Data Structures & Algorithms"
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/10 text-slate-200"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* What Drives Me Card */}
            <div className="p-6 rounded-2xl bg-[#0E111A]/80 border border-white/10 backdrop-blur-xl">
              <h4 className="text-sm font-mono uppercase tracking-wider text-accent-violet mb-4 font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Approach to Software Development
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <p className="text-sm text-dark-muted">
                    <strong className="text-slate-200">Structured Architecture:</strong> Organizing routes, controllers, and models cleanly for scale and readability.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <p className="text-sm text-dark-muted">
                    <strong className="text-slate-200">Data Integrity:</strong> Ensuring validated inputs, normalized SQL schemas, and reliable error responses.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <p className="text-sm text-dark-muted">
                    <strong className="text-slate-200">User Experience:</strong> Building intuitive UI layouts with thoughtful responsive feedback and accessible elements.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Education Card & Timeline */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
            
            {/* Primary Education Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0E111A] via-[#111522] to-[#0E111A] border border-accent-blue/20 backdrop-blur-xl relative overflow-hidden shadow-xl group hover:border-accent-blue/40 transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div className="p-3 rounded-xl bg-accent-blue/10 border border-accent-blue/25 text-accent-blue">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    Graduation: {personalInfo.education.graduationYear}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-2xl font-bold font-display text-white">
                  {personalInfo.education.degree}
                </h3>
                <p className="text-base text-accent-cyan font-medium mt-1">
                  {personalInfo.education.branch}
                </p>
                <p className="text-sm text-dark-muted mt-2 font-sans">
                  {personalInfo.education.college}
                </p>
              </div>

              {/* Academic Highlights */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-3">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-sm text-slate-300 font-medium">Cumulative Grade Point Average (CGPA)</span>
                  <span className="text-base font-mono font-bold text-accent-blue px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/25">
                    {personalInfo.education.cgpa}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-dark-muted block">
                    Curriculum Highlights
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-dark-muted">
                    {personalInfo.education.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent-blue mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Academic & Skill Timeline Card */}
            <div className="p-6 rounded-2xl bg-[#0E111A]/80 border border-white/10 backdrop-blur-xl">
              <h4 className="text-sm font-mono uppercase tracking-wider text-accent-blue mb-4 font-semibold flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Academic &amp; Learning Journey
              </h4>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-violet-500 before:to-cyan-500">
                {/* Milestone 1 */}
                <div className="relative">
                  <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-accent-blue border-2 border-[#07080D]" />
                  <span className="text-xs font-mono text-accent-blue">2022 &ndash; 2026</span>
                  <h5 className="text-sm font-bold text-white mt-0.5">B.Tech Engineering Degree</h5>
                  <p className="text-xs text-dark-muted mt-1">
                    Enrolled at SIRT Bhopal with specialization in Artificial Intelligence and Machine Learning.
                  </p>
                </div>

                {/* Milestone 2 */}
                <div className="relative">
                  <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-accent-violet border-2 border-[#07080D]" />
                  <span className="text-xs font-mono text-accent-violet">Full-Stack Development</span>
                  <h5 className="text-sm font-bold text-white mt-0.5">MERN &amp; MySQL Projects</h5>
                  <p className="text-xs text-dark-muted mt-1">
                    Engineered practical web applications including the Solar Service Management System with Node.js and MySQL.
                  </p>
                </div>

                {/* Milestone 3 */}
                <div className="relative">
                  <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-accent-cyan border-2 border-[#07080D]" />
                  <span className="text-xs font-mono text-accent-cyan">Current Focus</span>
                  <h5 className="text-sm font-bold text-white mt-0.5">Java Backend &amp; Spring Boot</h5>
                  <p className="text-xs text-dark-muted mt-1">
                    Expanding backend capabilities into enterprise Java, Spring Boot microservices, and advanced system design.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
