import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  Download, 
  ExternalLink, 
  GraduationCap, 
  Code2, 
  FolderGit2, 
  CheckCircle2, 
  Copy, 
  FileText,
  Printer
} from 'lucide-react'
import { personalInfo } from '../data/personalInfo'
import { skillCategories } from '../data/skills'
import { projects } from '../data/projects'

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const handleCopySummary = () => {
    const summaryText = `YASH THAKRE
Aspiring Software Developer | B.Tech in Artificial Intelligence & Machine Learning
College: Sagar Institute of Research and Technology (SIRT), Bhopal (Graduation: 2026, CGPA: 6.83/10)
GitHub: ${personalInfo.socials.github}
LinkedIn: ${personalInfo.socials.linkedin}

Core Skills:
- Frontend: React.js, JavaScript, Tailwind CSS, HTML, CSS
- Backend: Node.js, Express.js, REST APIs, JWT Auth, MVC Architecture
- Databases: MongoDB, MySQL, SQL
- Programming: Java, Data Structures & Algorithms
- Learning: Spring Boot, Java Backend

Key Project:
- Solar Service Management System (${personalInfo.repos.solarBackend})
`
    navigator.clipboard.writeText(summaryText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0E111A] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-dark-text"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-white/10 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-mono font-medium mb-2">
                <FileText className="w-3.5 h-3.5" />
                Verified Candidate Profile & Resume Sheet
              </div>
              <h2 className="text-2xl font-bold font-display text-white">{personalInfo.name}</h2>
              <p className="text-sm text-dark-muted mt-0.5">{personalInfo.title}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-dark-muted hover:text-white transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-3 py-4 border-b border-white/10 bg-white/[0.02] -mx-6 sm:-mx-8 px-6 sm:px-8">
            {personalInfo.resume.available ? (
              <a
                href={personalInfo.resume.filePath}
                download={personalInfo.resume.fileName}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue hover:bg-blue-600 text-white text-sm font-medium shadow-lg shadow-blue-500/20 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume PDF
              </a>
            ) : (
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue hover:bg-blue-600 text-white text-sm font-medium shadow-lg shadow-blue-500/20 transition-all"
                title="Print or Save Profile Sheet as PDF"
              >
                <Printer className="w-4 h-4" />
                Save / Print Profile PDF
              </button>
            )}

            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-dark-text text-sm font-medium border border-white/10 transition-colors"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? "Profile Copied!" : "Copy Text Summary"}
            </button>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-dark-text text-sm font-medium border border-white/10 transition-colors ml-auto"
            >
              <ExternalLink className="w-4 h-4" />
              LinkedIn Profile
            </a>
          </div>

          {/* Resume Body */}
          <div className="space-y-6 pt-5">
            {/* Education Summary */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-cyan flex items-center gap-2 font-semibold">
                <GraduationCap className="w-4 h-4" />
                Education
              </h3>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-semibold text-white text-base">
                    {personalInfo.education.degree} in {personalInfo.education.branch}
                  </h4>
                  <p className="text-sm text-dark-muted">{personalInfo.education.college}</p>
                </div>
                <div className="text-left sm:text-right font-mono text-sm">
                  <div className="text-accent-blue font-semibold">CGPA: {personalInfo.education.cgpa}</div>
                  <div className="text-xs text-dark-muted">Class of {personalInfo.education.graduationYear}</div>
                </div>
              </div>
            </div>

            {/* Core Technical Competencies */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-violet flex items-center gap-2 font-semibold">
                <Code2 className="w-4 h-4" />
                Verified Technical Knowledge
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                {skillCategories.map((cat) => (
                  <div key={cat.id} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <p className="font-medium text-white mb-2 text-xs font-mono uppercase tracking-wide text-dark-muted">
                      {cat.title}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s) => (
                        <span
                          key={s.name}
                          className="px-2 py-0.5 rounded text-xs bg-white/5 border border-white/10 text-slate-300"
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Project Reference */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2 font-semibold">
                <FolderGit2 className="w-4 h-4" />
                Key Software Project
              </h3>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-white">{projects[0].title}</h4>
                  <a
                    href={projects[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent-blue hover:underline inline-flex items-center gap-1 font-mono"
                  >
                    View Code <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-dark-muted leading-relaxed">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {projects[0].tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Recruiter Note / PDF Configuration Guidance */}
            <div className="p-3.5 rounded-xl bg-blue-500/5 border border-blue-500/20 text-xs text-dark-muted flex items-start gap-2.5">
              <div className="w-2 h-2 rounded-full bg-accent-blue mt-1 shrink-0" />
              <p>
                <strong className="text-white">Note for Recruiters:</strong> This profile reflects Yash Thakre&apos;s verified academic records at SIRT Bhopal and open-source repositories. To configure a dedicated PDF download file, place <code className="text-accent-cyan">resume.pdf</code> in the <code className="text-accent-cyan">/public</code> folder and toggle <code className="text-accent-cyan">available: true</code> in <code className="text-accent-cyan">src/data/personalInfo.js</code>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
