import { useEffect, useState } from 'react'
import { navItems } from '../data/portfolio'

export function useActiveSection() {
  const [active, setActive] = useState(navItems[0].href)

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActive(`#${visible.target.id}`)
      },
      { threshold: [0.24, 0.42, 0.6], rootMargin: '-18% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return active
}
