import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function TiltCard({ children, className = '' }) {
  const rectRef = useRef(null)
  const frameRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 22 })
  const springY = useSpring(y, { stiffness: 150, damping: 22 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-5deg', '5deg'])

  const handleMove = (event) => {
    if (event.pointerType !== 'mouse' || !rectRef.current) return
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    const { clientX, clientY } = event

    frameRef.current = requestAnimationFrame(() => {
      const rect = rectRef.current
      x.set((clientX - rect.left) / rect.width - 0.5)
      y.set((clientY - rect.top) / rect.height - 0.5)
    })
  }

  return (
    <motion.div
      className={`group relative transform-gpu rounded-[1.35rem] border border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-2xl ${className}`}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') rectRef.current = event.currentTarget.getBoundingClientRect()
      }}
      onPointerMove={handleMove}
      onPointerLeave={() => {
        if (frameRef.current) cancelAnimationFrame(frameRef.current)
        rectRef.current = null
        x.set(0)
        y.set(0)
      }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 150, damping: 22 }}
    >
      <div className="absolute inset-0 rounded-[1.35rem] bg-gradient-to-br from-white/10 via-transparent to-cyan-300/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -inset-px rounded-[1.35rem] bg-gradient-to-r from-plasma/0 via-ion/30 to-acid/0 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative h-full md:[transform:translateZ(18px)]">
        {children}
      </div>
    </motion.div>
  )
}
