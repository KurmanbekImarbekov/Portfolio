import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const hoveredRef = useRef(false)
  const visibleRef = useRef(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 300, damping: 34 })
  const springY = useSpring(y, { stiffness: 300, damping: 34 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768) return undefined

    const move = (event) => {
      if (!visibleRef.current) {
        visibleRef.current = true
        setVisible(true)
      }
      x.set(event.clientX - 12)
      y.set(event.clientY - 12)
    }
    const leave = () => {
      visibleRef.current = false
      setVisible(false)
    }
    const over = (event) => {
      const next = Boolean(event.target.closest('a, button, input, textarea, .magnetic'))
      if (next !== hoveredRef.current) {
        hoveredRef.current = next
        setHovered(next)
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseout', leave)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseout', leave)
      window.removeEventListener('mouseover', over)
    }
  }, [x, y])

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-6 w-6 rounded-full border border-cyan-200/70 mix-blend-screen shadow-[0_0_24px_rgba(56,189,248,.55)] md:block"
      style={{ x: springX, y: springY }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: hovered ? 2.45 : 1,
        backgroundColor: hovered ? 'rgba(56, 189, 248, 0.12)' : 'rgba(139, 92, 246, 0.08)',
      }}
      transition={{ duration: 0.22 }}
    />
  )
}
