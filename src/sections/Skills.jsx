import React from 'react'
import { motion } from 'framer-motion'
import { 
  Layout, 
  Server, 
  Database, 
  Code2, 
  Wrench, 
  Sparkles,
  CheckCircle,
  Zap
} from 'lucide-react'
import { skillCategories } from '../data/skills'

// Icon resolver map
const ICONS = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Code2: Code2,
  Wrench: Wrench,
  Sparkles: Sparkles,
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/25 text-accent-blue text-xs font-mono mb-4"
          >
            <Zap className="w-3.5 h-3.5" />
            Verified Competencies
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Skills</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-dark-muted mt-4 leading-relaxed"
          >
            Proficiencies across full-stack engineering, scalable APIs, relational &amp; document databases, and foundational computer science concepts.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const CategoryIcon = ICONS[category.icon] || Code2
            const isLearning = category.id === 'learning'

            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl bg-[#0E111A]/85 border border-white/10 hover:border-white/20 backdrop-blur-xl transition-all duration-300 shadow-lg flex flex-col justify-between overflow-hidden"
              >
                {/* Glow Backdrop */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${category.glowColor}, transparent 70%)`
                  }}
                />

                <div>
                  {/* Category Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white group-hover:text-accent-blue transition-colors">
                        <CategoryIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold font-display text-white text-lg group-hover:text-slate-100 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-xs text-dark-muted font-sans mt-0.5">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {category.badge && (
                      <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-pink-500/15 border border-pink-500/30 text-pink-300">
                        {category.badge}
                      </span>
                    )}
                  </div>

                  {/* Skills Badges List */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                          skill.highlight
                            ? 'bg-white/[0.06] text-white border border-white/15 hover:border-accent-blue/50 hover:bg-white/[0.09]'
                            : 'bg-white/[0.02] text-slate-300 border border-white/5 hover:border-white/10 hover:text-white'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          isLearning 
                            ? 'bg-pink-400 animate-pulse' 
                            : skill.highlight ? 'bg-accent-blue' : 'bg-slate-400'
                        }`} />
                        <span className="font-medium">{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[10px] text-dark-muted/80 pl-1 font-sans">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer indicator */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-dark-muted">
                  <span>{category.skills.length} core topics</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    Verified
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Recruiter friendly footnote */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-dark-muted inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Recruiter-friendly note: All listed skills reflect actual academic coursework and hands-on project implementations.
          </p>
        </div>

      </div>
    </section>
  )
}
