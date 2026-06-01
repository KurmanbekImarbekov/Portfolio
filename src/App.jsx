import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import {
  ArrowUpRight,
  ArrowUp,
  BriefcaseBusiness,
  Code2,
  GitBranch,
  Mail,
  Send,
  Sparkles,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { AnimatedBackground } from './components/AnimatedBackground'
import { CustomCursor } from './components/CustomCursor'
import { LoadingScreen } from './components/LoadingScreen'
import { MagneticButton } from './components/MagneticButton'
import { Navbar } from './components/Navbar'
import { Reveal } from './components/Reveal'
import { SectionHeader } from './components/SectionHeader'
import { TiltCard } from './components/TiltCard'
import { contacts, floatingTech, projects, skills, socialLinks, stats, timeline } from './data/portfolio'

function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 190])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section id="home" ref={heroRef} className="relative grid min-h-screen place-items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6">
      <motion.div className="absolute inset-0" style={{ y, opacity }} aria-hidden="true">
        <div className="absolute left-1/2 top-20 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-plasma/20 blur-[110px]" />
        <div className="absolute right-[8%] top-[28%] h-60 w-60 rounded-full bg-cyan-400/15 blur-[85px]" />
        <div className="absolute bottom-[10%] left-[7%] h-56 w-56 rounded-full bg-acid/10 blur-[80px]" />
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-spinSlow" />
      </motion.div>

      {floatingTech.map(({ label, icon: Icon, className }) => (
        <motion.div
          key={label}
          className={`absolute hidden rounded-full border border-white/10 bg-white/[0.055] px-4 py-3 text-white/78 shadow-neon backdrop-blur-xl lg:flex ${className}`}
          animate={{ y: [0, -18, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon className="mr-2 h-4 w-4 text-cyan-200" />
          <span className="text-sm font-semibold">{label}</span>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <motion.div
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/[0.055] px-4 py-2 text-sm text-cyan-100 backdrop-blur-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
        >
          <Sparkles className="h-4 w-4 text-acid" />
          Available for frontend opportunities
        </motion.div>

        <motion.h1
          className="mx-auto max-w-5xl text-balance font-display text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 42, filter: 'blur(16px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.35, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Kurmanbek{' '}
          <span className="animate-shimmer bg-[linear-gradient(90deg,#fff,#67e8f9,#a78bfa,#bef264,#fff)] bg-[length:200%_auto] bg-clip-text text-transparent">
            Imarbekov
          </span>
        </motion.h1>

        <motion.p
          className="mt-5 font-display text-xl font-semibold uppercase tracking-[0.42em] text-cyan-100/90 sm:text-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
        >
          Frontend Developer
        </motion.p>

        <motion.p
          className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/64 sm:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8 }}
        >
          I create modern web experiences that feel fast, precise, responsive, and visually memorable.
          Every interface is shaped with clean code, strong UI taste, and motion that makes the product feel alive.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
        >
          <MagneticButton href="#projects" icon={BriefcaseBusiness}>View Projects</MagneticButton>
          <MagneticButton href="#contact" variant="secondary" icon={Mail}>Contact Me</MagneticButton>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25 + index * 0.12 }}
            >
              <p className="font-display text-2xl font-black text-white">{stat.value}</p>
              <p className="mt-1 text-xs text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About Me"
          title="Design-minded frontend craft with a product heart."
          text="I care about interfaces that look beautiful, respond smoothly, and help people move through a product with confidence."
        />

        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <TiltCard className="overflow-hidden p-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] border border-white/10 bg-ink">
                <img src="/assets/avatar-orb.png" alt="Abstract profile artwork for Kurmanbek Imarbekov" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-void/55 p-5 backdrop-blur-2xl">
                  <p className="font-display text-2xl font-black text-white">Kurmanbek Imarbekov</p>
                  <p className="mt-2 text-sm text-cyan-100/70">Frontend Developer focused on motion, detail, and responsive UI.</p>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ['Passionate frontend developer', 'I enjoy turning ideas into polished web interfaces with personality and clarity.'],
              ['Love for UI/UX', 'Strong layouts, thoughtful spacing, readable typography, and motion details matter to me.'],
              ['Responsive and interactive websites', 'I build screens that adapt naturally across devices and feel smooth under the cursor.'],
              ['Learning every day', 'I am improving with React, APIs, animation patterns, and real-world project structure.'],
            ].map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.08}>
                <TiltCard className="h-full p-6">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 text-cyan-100 shadow-neon">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-white/58">{text}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title="A modern frontend stack for expressive, fast interfaces."
          text="Core technologies I use to build clean layouts, animated components, API-connected pages, and responsive experiences."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Reveal key={skill.name} delay={(index % 5) * 0.06}>
                <TiltCard className="h-full p-5">
                  <div className="flex items-center justify-between">
                    <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${skill.accent} text-void shadow-neon`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-bold text-white/62">{skill.level}%</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{skill.name}</h3>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.accent}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.25, delay: 0.1 + index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projects"
          title="Premium project cards with motion, depth, and product polish."
          text="Concept projects shaped to show frontend taste, component thinking, responsive layout, and attention to animated detail."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <TiltCard className="h-full overflow-hidden">
                <div className="relative aspect-[16/11] overflow-hidden rounded-t-[1.35rem]">
                  <img src={project.image} alt={`${project.title} interface preview`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-black text-white">{project.title}</h3>
                  <p className="mt-3 min-h-24 leading-7 text-white/58">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-cyan-100/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href={project.github} className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.055] text-sm font-bold text-white transition hover:border-cyan-200/40 hover:bg-white/10">
                      <GitBranch className="h-4 w-4" />
                      GitHub
                    </a>
                    <a href={project.demo} className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-cyan-200 text-sm font-black text-void transition hover:bg-acid">
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section id="journey" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Journey"
          title="A focused path from fundamentals to real frontend work."
          text="Each step builds toward stronger UI decisions, better code habits, and production-ready confidence."
        />

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-plasma to-acid sm:left-1/2" />
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className={`relative mb-8 grid gap-4 pl-14 sm:grid-cols-2 sm:pl-0 ${index % 2 ? '' : 'sm:text-right'}`}>
                <div className={index % 2 ? 'sm:col-start-2 sm:pl-10' : 'sm:pr-10'}>
                  <TiltCard className="p-6">
                    <span className="text-sm font-bold text-cyan-100/70">0{index + 1}</span>
                    <h3 className="mt-2 font-display text-xl font-black text-white">{item.title}</h3>
                    <p className="mt-3 leading-7 text-white/58">{item.text}</p>
                  </TiltCard>
                </div>
                <motion.div
                  className="absolute left-2 top-6 grid h-7 w-7 place-items-center rounded-full border border-cyan-100/40 bg-void shadow-neon sm:left-1/2 sm:-translate-x-1/2"
                  whileInView={{ scale: [0.7, 1.18, 1] }}
                  viewport={{ once: true }}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-200" />
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something sharp, smooth, and memorable."
          text="Open to frontend opportunities, internships, collaborations, and real projects where strong UI makes a difference."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <TiltCard className="h-full p-6 sm:p-8">
              <div className="space-y-4">
                {contacts.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:border-cyan-200/35 hover:bg-white/[0.075]"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-100 shadow-neon">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-white/45">{label}</span>
                      <span className="block truncate font-semibold text-white group-hover:text-cyan-100">{value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.1}>
            <TiltCard className="p-6 sm:p-8">
              <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="field" type="text" placeholder="Name" aria-label="Name" />
                  <input className="field" type="email" placeholder="Email" aria-label="Email" />
                </div>
                <input className="field" type="text" placeholder="Project type" aria-label="Project type" />
                <textarea className="field min-h-40 resize-none" placeholder="Message" aria-label="Message" />
                <MagneticButton type="submit" icon={Send} className="w-full sm:w-fit">Send Message</MagneticButton>
              </form>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-cyan-200/20 px-4 py-10 shadow-[0_-18px_60px_rgba(56,189,248,.08)] sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-lg font-black text-white">Kurmanbek Imarbekov</p>
          <p className="mt-1 text-sm text-white/45">Frontend Developer</p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-white/70 transition hover:border-cyan-200/35 hover:text-cyan-100 hover:shadow-neon" aria-label={label}>
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 24 })

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1650)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-void font-body text-white selection:bg-cyan-200 selection:text-void">
      <LoadingScreen isLoading={loading} />
      <motion.div className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-plasma via-ion to-acid" style={{ scaleX }} />
      <AnimatedBackground />
      <CustomCursor />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:radial-gradient(circle_at_50%_15%,black,transparent_72%)]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <a
        href="#home"
        className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.07] text-white backdrop-blur-xl transition hover:border-cyan-200/40 hover:shadow-neon"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </div>
  )
}
