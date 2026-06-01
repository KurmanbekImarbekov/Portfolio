import { Reveal } from './Reveal'

export function SectionHeader({ eyebrow, title, text }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.42em] text-cyan-200/80">{eyebrow}</p>
      <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/62">{text}</p>}
    </Reveal>
  )
}
