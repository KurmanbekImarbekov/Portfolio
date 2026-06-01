import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 ${
          scrolled
            ? 'border-white/12 bg-void/70 shadow-neon backdrop-blur-2xl'
            : 'border-white/8 bg-white/[0.025] backdrop-blur-xl'
        }`}
      >
        <a href="#home" className="group flex items-center gap-3" aria-label="Kurmanbek Imarbekov home">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-200/30 bg-white/[0.06] font-display text-sm font-black text-white shadow-neon">
            KI
          </span>
          <span className="hidden font-display text-sm font-bold text-white sm:block">Kurmanbek</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-4 py-2 text-sm transition ${
                active === item.href ? 'text-white' : 'text-white/58 hover:text-white'
              }`}
            >
              {active === item.href && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-full border border-cyan-200/25 bg-white/[0.07]"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </a>
          ))}
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/[0.05] text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          className="mx-auto mt-3 grid max-w-7xl gap-2 rounded-3xl border border-white/10 bg-void/90 p-3 backdrop-blur-2xl md:hidden"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-2xl px-4 py-3 text-sm ${active === item.href ? 'bg-white/10 text-white' : 'text-white/65'}`}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}
