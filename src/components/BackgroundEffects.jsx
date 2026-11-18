import React from 'react'
import { motion } from 'framer-motion'

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Radial vignette fade for dark depth */}
      <div className="absolute inset-0 bg-radial-vignette" />

      {/* Top Center Electric Blue Glow Orb */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[550px] bg-gradient-to-br from-blue-600/30 via-violet-600/20 to-transparent rounded-full blur-[110px]"
      />

      {/* Floating Violet Orb on Left */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] -left-40 w-[500px] h-[500px] bg-gradient-to-r from-violet-600/25 to-purple-800/15 rounded-full blur-[130px]"
      />

      {/* Subtle Cyan Orb on Right */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.1, 0.2, 0.1],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[65%] -right-40 w-[550px] h-[550px] bg-gradient-to-l from-cyan-500/20 to-blue-600/10 rounded-full blur-[120px]"
      />

      {/* Floating subtle developer code glyphs */}
      <div className="absolute inset-0 select-none font-mono text-[11px] text-white/[0.04]">
        <span className="absolute top-[18%] left-[8%] tracking-widest">&lt;code&gt;</span>
        <span className="absolute top-[28%] right-[12%] tracking-widest">&#123; return async () &#125;</span>
        <span className="absolute top-[52%] left-[15%] tracking-widest">// scalable web arch</span>
        <span className="absolute top-[75%] right-[10%] tracking-widest">&lt;/dev&gt;</span>
        <span className="absolute top-[88%] left-[22%] tracking-widest">const stack = [MERN, Java]</span>
      </div>
    </div>
  )
}
