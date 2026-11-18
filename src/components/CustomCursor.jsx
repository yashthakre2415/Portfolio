import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    // Only enable for desktop mice
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!hasFinePointer || prefersReducedMotion) {
      return
    }

    setIsSupported(true)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      // Check if hovering over clickable element
      const target = e.target
      const isClickable = Boolean(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer'
      )
      setIsPointer(isClickable)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  if (!isSupported || !isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {/* Outer subtle glow */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent-blue/40 pointer-events-none"
        animate={{
          x: mousePosition.x - (isPointer ? 22 : 14),
          y: mousePosition.y - (isPointer ? 22 : 14),
          width: isPointer ? 44 : 28,
          height: isPointer ? 44 : 28,
          backgroundColor: isPointer ? 'rgba(59, 130, 246, 0.12)' : 'rgba(139, 92, 246, 0.05)',
          borderColor: isPointer ? 'rgba(96, 165, 250, 0.6)' : 'rgba(139, 92, 246, 0.3)',
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      {/* Core pinpoint dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_#06b6d4] pointer-events-none"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isPointer ? 1.6 : 1,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 450,
          mass: 0.2,
        }}
      />
    </div>
  )
}
