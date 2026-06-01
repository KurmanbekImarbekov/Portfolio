import {
  Atom,
  Braces,
  Code2,
  FileCode2,
  GitBranch,
  GitPullRequest,
  Globe2,
  Layers3,
  MonitorSmartphone,
  Palette,
  Rocket,
  Send,
  Sparkles,
  Wind,
  Zap,
} from 'lucide-react'

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export const floatingTech = [
  { label: 'React', icon: Atom, className: 'left-[8%] top-[28%] delay-0' },
  { label: 'Vite', icon: Zap, className: 'right-[11%] top-[25%] delay-150' },
  { label: 'UI/UX', icon: Palette, className: 'left-[17%] bottom-[22%] delay-300' },
  { label: 'API', icon: Globe2, className: 'right-[18%] bottom-[18%] delay-500' },
  { label: 'Git', icon: GitPullRequest, className: 'left-[48%] top-[16%] delay-700' },
]

export const stats = [
  { value: '10+', label: 'Core Skills' },
  { value: '6', label: 'Learning Milestones' },
  { value: '100%', label: 'Responsive Mindset' },
]

export const skills = [
  { name: 'HTML5', level: 95, icon: FileCode2, accent: 'from-orange-400 to-ember' },
  { name: 'CSS3', level: 92, icon: Palette, accent: 'from-ion to-blue-500' },
  { name: 'SCSS', level: 86, icon: Layers3, accent: 'from-pink-400 to-plasma' },
  { name: 'JavaScript', level: 88, icon: Braces, accent: 'from-yellow-300 to-ember' },
  { name: 'React', level: 82, icon: Atom, accent: 'from-pulse to-ion' },
  { name: 'Tailwind CSS', level: 90, icon: Wind, accent: 'from-cyan-300 to-teal-400' },
  { name: 'Git & GitHub', level: 84, icon: GitBranch, accent: 'from-zinc-200 to-zinc-500' },
  { name: 'REST API', level: 78, icon: Globe2, accent: 'from-acid to-emerald-500' },
  { name: 'Responsive Design', level: 94, icon: MonitorSmartphone, accent: 'from-sky-300 to-indigo-400' },
  { name: 'Vite', level: 88, icon: Rocket, accent: 'from-plasma to-pulse' },
]

export const projects = [
  {
    title: 'Nebula SaaS Dashboard',
    description:
      'A responsive analytics interface with sharp data cards, command-like navigation, and animated activity states.',
    image: '/assets/project-nebula.png',
    tech: ['React', 'Tailwind', 'Charts', 'API'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Aurora Commerce',
    description:
      'A cinematic storefront concept with premium product cards, fluid hover motion, and conversion-focused layouts.',
    image: '/assets/project-aurora.png',
    tech: ['Vite', 'React', 'Framer Motion'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Pulse Portfolio System',
    description:
      'A personal brand experience built around scroll reveals, glass panels, responsive sections, and magnetic actions.',
    image: '/assets/project-pulse.png',
    tech: ['React', 'Tailwind', 'UX'],
    github: 'https://github.com/',
    demo: '#',
  },
]

export const timeline = [
  {
    title: 'Started learning frontend',
    text: 'Built the foundation with curiosity, discipline, and a clear focus on visual interfaces.',
  },
  {
    title: 'Learned HTML & CSS',
    text: 'Practiced semantic structure, layouts, spacing, accessibility, and responsive thinking.',
  },
  {
    title: 'Mastered JavaScript basics',
    text: 'Gained confidence with logic, DOM interactions, data flow, and problem solving.',
  },
  {
    title: 'Learning React',
    text: 'Creating component-driven experiences with state, props, hooks, and animation systems.',
  },
  {
    title: 'Building projects',
    text: 'Turning concepts into polished pages, reusable UI pieces, and complete user journeys.',
  },
  {
    title: 'Looking for first frontend job',
    text: 'Ready for real projects, strong mentorship, and a team where craft matters.',
  },
]

export const contacts = [
  { label: 'Email', value: 'cmolohov46@example.com', href: 'mailto:kurmanbek.imarbekov@example.com', icon: Send },
  { label: 'Telegram', value: '@kurmanbek_dev', href: 'https://t.me/kukurma17', icon: Send },
  { label: 'GitHub', value: 'github.com/kurmanbekImarbekov', href: 'https://github.com/', icon: GitBranch },
  { label: 'LinkedIn', value: 'linkedin.com/in/kurmanbek', href: 'https://linkedin.com/', icon: Code2 },
]

export const socialLinks = contacts.slice(1)
