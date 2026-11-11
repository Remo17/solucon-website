import { useEffect, useState } from 'react'

/**
 * Lightweight motion layer. Content is fully visible until `motion-ready` is set,
 * so reading never depends on JavaScript. Variants are declared in markup via
 * `data-reveal` and choreographed in CSS.
 */
export function useSiteMotion(routeKey: string) {
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(preference.matches)
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const cleanups: Array<() => void> = []
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    targets.forEach((el) => {
      if (el.dataset.reveal === 'stagger' || el.dataset.reveal === 'rows') {
        Array.from(el.children).forEach((c, i) => (c as HTMLElement).style.setProperty('--ci', String(Math.min(i, 8))))
      }
    })

    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'))
    } else {
      root.classList.add('motion-ready')
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }),
        { rootMargin: '0px 0px -8% 0px' },
      )
      targets.forEach((el) => io.observe(el))
      cleanups.push(() => io.disconnect())
    }

    const header = document.querySelector<HTMLElement>('.site-header')
    const scrub = document.querySelector<HTMLElement>('[data-scrub]')
    if (scrub) {
      scrub.style.setProperty('--n', String(scrub.querySelectorAll('.w').length))
      scrub.style.setProperty('--p', reduced ? '1' : '0')
    }
    let lastY = window.scrollY
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const y = window.scrollY
        const max = root.scrollHeight - window.innerHeight
        root.style.setProperty('--scroll-progress', String(max > 0 ? y / max : 0))
        if (header) {
          header.classList.toggle('is-scrolled', y > 8)
          const busy = header.querySelector('.is-open') || header.contains(document.activeElement)
          header.classList.toggle('is-hidden', !reduced && y > 320 && y > lastY && !busy)
        }
        lastY = y
        if (scrub && !reduced) {
          const r = scrub.getBoundingClientRect()
          const p = (window.innerHeight * 0.8 - r.top) / (r.height + window.innerHeight * 0.2)
          scrub.style.setProperty('--p', Math.min(Math.max(p, 0), 1).toFixed(3))
        }
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    cleanups.push(() => window.removeEventListener('scroll', onScroll))

    return () => {
      cancelAnimationFrame(frame)
      cleanups.forEach((fn) => fn())
      root.classList.remove('motion-ready')
    }
  }, [routeKey, reduced])
}
