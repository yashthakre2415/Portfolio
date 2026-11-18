import React from 'react'
import { motion } from 'framer-motion'
import { 
  Sun, 
  Database, 
  FileCheck, 
  Sparkles, 
  Video, 
  Share2, 
  Vote, 
  ShieldCheck, 
  Cpu, 
  Server,
  Layers,
  CheckCircle2
} from 'lucide-react'

export default function ProjectVisual({ theme, title, accentColor }) {
  if (theme === 'solar') {
    return (
      <div className="relative w-full h-48 bg-gradient-to-br from-[#0F1422] to-[#161C2C] rounded-xl overflow-hidden p-4 border border-white/5 flex flex-col justify-between">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />

        {/* Top bar with server status */}
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300">
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>Solar Operations Backend</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>MySQL Active</span>
          </div>
        </div>

        {/* Center Architecture Wireframe */}
        <div className="grid grid-cols-3 gap-2 my-auto font-mono text-[11px]">
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-center">
            <Server className="w-4 h-4 text-accent-blue mx-auto mb-1" />
            <span className="text-slate-300 block">Express API</span>
            <span className="text-[9px] text-dark-muted">REST Routes</span>
          </div>
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-center">
            <Cpu className="w-4 h-4 text-accent-violet mx-auto mb-1" />
            <span className="text-slate-300 block">MVC Core</span>
            <span className="text-[9px] text-dark-muted">Controllers</span>
          </div>
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-center">
            <Database className="w-4 h-4 text-amber-400 mx-auto mb-1" />
            <span className="text-slate-300 block">MySQL DB</span>
            <span className="text-[9px] text-dark-muted">Relational</span>
          </div>
        </div>

        {/* Bottom endpoint mockup */}
        <div className="p-2 rounded-lg bg-black/50 border border-white/5 font-mono text-[10px] text-slate-400 flex items-center justify-between">
          <span className="text-amber-300 font-semibold">GET /api/solar/services</span>
          <span className="text-emerald-400">200 OK &bull; 24ms</span>
        </div>
      </div>
    )
  }

  if (theme === 'resume') {
    return (
      <div className="relative w-full h-48 bg-gradient-to-br from-[#0B132B] to-[#121B36] rounded-xl overflow-hidden p-4 border border-white/5 flex flex-col justify-between">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />

        {/* Top header */}
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300">
            <FileCheck className="w-3.5 h-3.5 text-accent-blue" />
            <span>ATS Resume Engine</span>
          </div>
          <span className="text-[10px] font-mono text-dark-muted px-2 py-0.5 rounded bg-white/5">
            Full-Stack React
          </span>
        </div>

        {/* Resume Preview Simulation */}
        <div className="bg-black/40 border border-white/10 rounded-lg p-3 my-auto space-y-2">
          <div className="flex items-center justify-between">
            <div className="h-2 w-28 bg-white/30 rounded" />
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> ATS Friendly
            </span>
          </div>
          <div className="h-1.5 w-44 bg-white/15 rounded" />
          <div className="h-1.5 w-36 bg-white/15 rounded" />
          
          <div className="flex gap-1.5 pt-1">
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-blue-500/20 text-blue-300">Keywords: Matched</span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-violet-500/20 text-violet-300">Format: Clean</span>
          </div>
        </div>

        {/* Bottom scanner indicator */}
        <div className="p-2 rounded-lg bg-black/50 border border-white/5 font-mono text-[10px] text-slate-400 flex items-center justify-between">
          <span className="text-blue-300">Builder &amp; Analyzer Workflow</span>
          <span className="text-accent-cyan">Interactive UI</span>
        </div>
      </div>
    )
  }

  if (theme === 'creator') {
    return (
      <div className="relative w-full h-48 bg-gradient-to-br from-[#150F24] to-[#1E1435] rounded-xl overflow-hidden p-4 border border-white/5 flex flex-col justify-between">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />

        {/* Top header */}
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300">
            <Video className="w-3.5 h-3.5 text-accent-violet" />
            <span>Creator Studio Platform</span>
          </div>
          <span className="text-[10px] font-mono text-dark-muted px-2 py-0.5 rounded bg-white/5">
            MERN Stack
          </span>
        </div>

        {/* Creator Workflow Timeline Mockup */}
        <div className="bg-black/40 border border-white/10 rounded-lg p-3 my-auto space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
            <span>Publishing Queue</span>
            <span className="text-purple-400 flex items-center gap-1">
              <Share2 className="w-3 h-3" /> Multi-Channel
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
            <div className="p-1.5 rounded bg-white/5 text-slate-300">Drafts</div>
            <div className="p-1.5 rounded bg-purple-500/20 text-purple-200 border border-purple-500/30">Review</div>
            <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-300">Live</div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="p-2 rounded-lg bg-black/50 border border-white/5 font-mono text-[10px] text-slate-400 flex items-center justify-between">
          <span className="text-purple-300">Creator Workflow Optimization</span>
          <span className="text-slate-400">Node &bull; MongoDB</span>
        </div>
      </div>
    )
  }

  // Voting App theme fallback
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-[#0B1A24] to-[#102430] rounded-xl overflow-hidden p-4 border border-white/5 flex flex-col justify-between">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />

      {/* Top header */}
      <div className="flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
          <Vote className="w-3.5 h-3.5 text-accent-cyan" />
          <span>Digital Voting System</span>
        </div>
        <span className="text-[10px] font-mono text-dark-muted px-2 py-0.5 rounded bg-white/5">
          Secured Workflow
        </span>
      </div>

      {/* Voting Workflow Wireframe */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-3 my-auto space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
          <span>Digital Ballot Ledger</span>
          <span className="text-cyan-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Verified
          </span>
        </div>
        <div className="flex items-center justify-between p-2 rounded bg-white/5 text-[10px] font-mono">
          <span className="text-slate-300">Voter State</span>
          <span className="text-emerald-400">Authenticated &amp; One Vote Only</span>
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="p-2 rounded-lg bg-black/50 border border-white/5 font-mono text-[10px] text-slate-400 flex items-center justify-between">
        <span className="text-cyan-300">Structured Ballot Logic</span>
        <span className="text-slate-400">Database Backed</span>
      </div>
    </div>
  )
}
