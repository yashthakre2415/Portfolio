import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, CheckCircle2, Lock, ArrowUpRight } from 'lucide-react'
import ProjectVisual from './ProjectVisual'

export default function ProjectCard({ project, index }) {
  const hasGithub = Boolean(project.githubUrl)
  const hasLive = Boolean(project.liveUrl)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#0E111A]/90 border border-white/10 hover:border-white/20 backdrop-blur-xl overflow-hidden transition-all duration-300 shadow-xl"
    >
      {/* Top Ambient Highlight */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-60 group-hover:opacity-100 transition-opacity"
        style={{
          backgroundImage: `linear-gradient(to right, ${project.accentColor}, transparent)`
        }}
      />

      <div className="p-6">
        {/* Project Custom Theme Visual Header */}
        <div className="mb-5 overflow-hidden rounded-xl border border-white/5 transition-transform duration-300 group-hover:scale-[1.01]">
          <ProjectVisual
            theme={project.visualTheme}
            title={project.title}
            accentColor={project.accentColor}
          />
        </div>

        {/* Category & Status Pill */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-white/[0.04] border border-white/10 text-slate-300">
            {project.category}
          </span>
          <span className="text-xs font-mono text-dark-muted flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${hasGithub ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            {project.status}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold font-display text-white group-hover:text-slate-100 transition-colors">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-sm text-dark-muted mt-2.5 leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors">
          {project.description}
        </p>

        {/* Key Feature Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-1.5">
            <p className="text-[11px] font-mono uppercase tracking-wider text-dark-muted font-semibold">
              Key Features &amp; Architecture:
            </p>
            <ul className="space-y-1 text-xs text-slate-300">
              {project.highlights.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan mt-0.5 shrink-0" />
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-6 pt-0 mt-2 border-t border-white/[0.06] flex items-center justify-between gap-3 bg-white/[0.01]">
        {hasGithub ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs sm:text-sm font-medium border border-white/10 hover:border-accent-blue/50 transition-all duration-200 group/btn"
          >
            <Github className="w-4 h-4 text-slate-200" />
            <span>View on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <div 
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.02] text-dark-muted text-xs sm:text-sm font-mono border border-white/5 cursor-not-allowed"
            title="Repository link will be activated once publicly published"
          >
            <Lock className="w-3.5 h-3.5 text-slate-500" />
            <span>Repository In Progress</span>
          </div>
        )}

        {hasLive && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-accent-blue/15 hover:bg-accent-blue/25 text-accent-blue text-xs font-medium border border-accent-blue/30 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.article>
  )
}
