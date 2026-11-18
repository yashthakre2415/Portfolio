import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FolderGit2, Sparkles, Filter, ExternalLink } from 'lucide-react'
import { projects, projectCategories } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { personalInfo } from '../data/personalInfo'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase())

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/25 text-accent-cyan text-xs font-mono mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            Practical Engineering Work
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-dark-muted mt-4 leading-relaxed"
          >
            A curated collection of web applications demonstrating backend system design, database integration, and modern frontend development.
          </motion.p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-blue-600/20 border border-blue-500/50 shadow-md shadow-blue-500/10'
                    : 'text-dark-muted hover:text-white bg-white/[0.03] border border-white/5 hover:border-white/10'
                }`}
              >
                <span>{category}</span>
                {category === "All" && (
                  <span className="ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-white/10">
                    {projects.length}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Central Repository Notice Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-blue-950/30 via-slate-900/40 to-violet-950/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <h4 className="font-bold text-white text-base">
              Interested in inspecting code architecture?
            </h4>
            <p className="text-xs sm:text-sm text-dark-muted mt-1">
              Explore the Solar Service Backend repository on GitHub featuring express routing, MySQL pooling, and MVC structure.
            </p>
          </div>
          <a
            href={personalInfo.repos.solarBackend}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-blue hover:bg-blue-600 text-white text-xs sm:text-sm font-medium shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]"
          >
            <span>Open Solar Backend Repo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
