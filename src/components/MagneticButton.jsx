import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'

export function MagneticButton({ children, href, variant = 'primary', className = '', icon: Icon, ...props }) {
  const ref = useRef(null)
  const rectRef = useRef(null)
  const frameRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 180, damping: 20 })
  const springY = useSpring(y, { stiffness: 180, damping: 20 })
  const Component = href ? motion.a : motion.button

  const handleMove = (event) => {
    if (event.pointerType !== 'mouse' || !rectRef.current) return
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    const { clientX, clientY } = event

    frameRef.current = requestAnimationFrame(() => {
      const rect = rectRef.current
      x.set((clientX - rect.left - rect.width / 2) * 0.14)
      y.set((clientY - rect.top - rect.height / 2) * 0.18)
    })
  }

  const reset = () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    rectRef.current = null
    x.set(0)
    y.set(0)
  }

  const styles =
    variant === 'secondary'
      ? 'border-white/15 bg-white/[0.045] text-white hover:border-cyan-200/50 hover:bg-white/[0.08]'
      : 'border-cyan-200/30 bg-gradient-to-r from-plasma via-ion to-acid text-void shadow-neon'

  return (
    <Component
      ref={ref}
      href={href}
      className={`magnetic group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full border px-6 text-sm font-bold transition ${styles} ${className}`}
      style={{ x: springX, y: springY }}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') rectRef.current = ref.current.getBoundingClientRect()
      }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.5),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
      {Icon && <Icon className="relative h-4 w-4" />}
      <span className="relative">{children}</span>
    </Component>
  )
}
