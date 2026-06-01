import { useEffect, useRef } from 'react'

const colors = ['56, 189, 248', '139, 92, 246', '34, 211, 238', '163, 230, 53']

export function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isSmallScreen = window.matchMedia('(max-width: 767px)').matches
    if (prefersReducedMotion) return undefined

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = 0
    let height = 0
    let animationFrame = 0
    let lastFrame = 0
    let particles = []

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)

      const count = isSmallScreen ? 18 : Math.min(44, Math.floor(width / 32))
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.7,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.16,
        color: colors[index % colors.length],
        phase: Math.random() * Math.PI * 2,
      }))
    }

    const draw = (time) => {
      if (time - lastFrame < 33) {
        animationFrame = requestAnimationFrame(draw)
        return
      }
      lastFrame = time

      ctx.clearRect(0, 0, width, height)
      ctx.shadowBlur = 0

      const pulse = 0.26 + Math.sin(time * 0.0008) * 0.05
      const gradient = ctx.createRadialGradient(width * 0.5, height * 0.18, 0, width * 0.5, height * 0.18, width * 0.45)
      gradient.addColorStop(0, `rgba(139, 92, 246, ${pulse})`)
      gradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.06)')
      gradient.addColorStop(1, 'rgba(5, 5, 10, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      ctx.lineWidth = 1
      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.phase += 0.012

        if (particle.x < -20) particle.x = width + 20
        if (particle.x > width + 20) particle.x = -20
        if (particle.y < -20) particle.y = height + 20
        if (particle.y > height + 20) particle.y = -20

        const alpha = 0.28 + Math.sin(particle.phase) * 0.12
        ctx.beginPath()
        ctx.fillStyle = `rgba(${particle.color}, ${alpha})`
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()

        if (isSmallScreen || index % 2) return

        const maxLinks = Math.min(index + 5, particles.length)
        for (let j = index + 1; j < maxLinks; j += 1) {
          const other = particles[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = dx * dx + dy * dy
          if (distance < 14400) {
            ctx.beginPath()
            ctx.strokeStyle = 'rgba(125, 211, 252, 0.045)'
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      })

      animationFrame = requestAnimationFrame(draw)
    }

    resize()
    draw(0)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-55" aria-hidden="true" />
}
