import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  ExternalLink, 
  Github, 
  Linkedin,
  MessageSquare,
  Sparkles
} from 'lucide-react'
import { personalInfo } from '../data/personalInfo'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submittedAction, setSubmittedAction] = useState(null)
  const [copied, setCopied] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.'
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject.'
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message.'
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.'
    }
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Compose formatted text
    const fullBody = `Hello Yash,

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
`
    // Trigger mailto client
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(formData.subject + ' - via Yash Thakre Portfolio')}&body=${encodeURIComponent(fullBody)}`
    
    // Open email client
    window.location.href = mailtoUrl

    // Display formatted preview dialog without faking backend delivery
    setSubmittedAction({
      body: fullBody,
      mailtoUrl: mailtoUrl,
    })
  }

  const handleCopyMessage = () => {
    if (submittedAction) {
      navigator.clipboard.writeText(submittedAction.body)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/25 text-accent-blue text-xs font-mono mb-4"
          >
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight"
          >
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">Work Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-dark-muted mt-4 leading-relaxed"
          >
            I am actively seeking software engineering and full-stack developer opportunities. Whether you are a recruiter, engineering manager, or fellow developer, feel free to reach out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Contact Guidelines & Quick Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0E111A]/90 border border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-bold font-display text-white mb-3 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-accent-cyan" />
                Direct Communication
              </h3>
              <p className="text-sm text-dark-muted leading-relaxed mb-6">
                Fill in the form to generate an email dispatch ready to send from your favorite client, or connect with me directly through LinkedIn or GitHub.
              </p>

              <div className="space-y-4">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#0A66C2]/50 hover:bg-white/[0.06] flex items-center justify-between text-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                    <div>
                      <div className="font-semibold text-white group-hover:text-blue-300 transition-colors">LinkedIn Profile</div>
                      <div className="text-xs text-dark-muted">Primary professional network</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-dark-muted group-hover:text-white transition-colors" />
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent-blue/50 hover:bg-white/[0.06] flex items-center justify-between text-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-slate-200" />
                    <div>
                      <div className="font-semibold text-white group-hover:text-blue-300 transition-colors">GitHub Profile</div>
                      <div className="text-xs text-dark-muted">Repositories &amp; source code</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-dark-muted group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Recruiter Notice Card */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-dark-muted space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Transparent Delivery Notice</span>
              </div>
              <p className="leading-relaxed">
                To guarantee reliable delivery without third-party email routing failures, this form generates an instant mailto draft and provides a one-click copied message format.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#0E111A]/95 border border-white/10 backdrop-blur-xl shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-dark-muted focus:outline-none focus:ring-2 transition-all ${
                      errors.name 
                        ? 'border-rose-500/80 focus:ring-rose-500/30' 
                        : 'border-white/10 focus:border-accent-blue focus:ring-accent-blue/20'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-dark-muted focus:outline-none focus:ring-2 transition-all ${
                      errors.email 
                        ? 'border-rose-500/80 focus:ring-rose-500/30' 
                        : 'border-white/10 focus:border-accent-blue focus:ring-accent-blue/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Developer Opportunity / Interview Invitation"
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-dark-muted focus:outline-none focus:ring-2 transition-all ${
                      errors.subject 
                        ? 'border-rose-500/80 focus:ring-rose-500/30' 
                        : 'border-white/10 focus:border-accent-blue focus:ring-accent-blue/20'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note, job description, or message here..."
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-dark-muted focus:outline-none focus:ring-2 transition-all resize-y ${
                      errors.message 
                        ? 'border-rose-500/80 focus:ring-rose-500/30' 
                        : 'border-white/10 focus:border-accent-blue focus:ring-accent-blue/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white font-medium text-sm shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] border border-white/10"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Feedback Dialog when dispatched */}
              <AnimatePresence>
                {submittedAction && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-6 p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-sm space-y-3"
                  >
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>Message Prepared Successfully</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Your default email application was prompted with this message. If your email app did not open automatically, you can copy the full text below or launch again:
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <button
                        onClick={handleCopyMessage}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-mono font-medium border border-white/10 transition-colors"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        {copied ? 'Copied to Clipboard!' : 'Copy Message Text'}
                      </button>
                      <a
                        href={submittedAction.mailtoUrl}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 text-xs font-mono font-medium border border-emerald-500/30 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        Launch Email Client Again
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
