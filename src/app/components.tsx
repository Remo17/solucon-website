import { Fragment, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router'
import { projects } from './data'

export function ArrowIcon({ direction = 'right' }: { direction?: 'right' | 'up-right' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`icon-arrow icon-arrow--${direction}`}>
      {direction === 'right' ? <path d="M4 12h16M14 6l6 6-6 6" /> : <path d="M7 17 17 7M8 7h9v9" />}
    </svg>
  )
}

export function Logo({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  const file = compact
    ? inverse ? '/assets/solucon-mark-light.svg' : '/assets/solucon-mark-dark.svg'
    : inverse ? '/assets/solucon-logo-dark.svg' : '/assets/solucon-logo-light.svg'
  return (
    <Link className={`brand ${compact ? 'brand--compact' : ''}`} to="/" aria-label="Solucon home">
      <img src={file} alt="Solucon" width={132} height={44} />
    </Link>
  )
}

/** Word-split text for masked heading reveals. Visible without JavaScript. */
export function Split({ text, start = 0 }: { text: string; start?: number }) {
  return (
    <>
      {text.split(' ').map((word, i, all) => (
        <Fragment key={i}>
          <span className="w" style={{ '--i': start + i } as CSSProperties}><span>{word}</span></span>
          {i < all.length - 1 && ' '}
        </Fragment>
      ))}
    </>
  )
}

export function Kicker({ index, children, tone }: { index?: string; children: ReactNode; tone?: 'light' }) {
  return (
    <p className={`kicker ${tone === 'light' ? 'kicker--light' : ''}`}>
      {index && <span className="kicker__index">{index}</span>}
      <span>{children}</span>
    </p>
  )
}

export function PageHero({
  index,
  eyebrow,
  title,
  intro,
  aside,
}: {
  index: string
  eyebrow: string
  title: string
  intro: string
  aside?: ReactNode
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <Kicker index={index} tone="light">{eyebrow}</Kicker>
        <h1 className="page-hero__title" data-reveal="words"><Split text={title} /></h1>
        <div className="page-hero__base">
          <p className="lead" data-reveal>{intro}</p>
          {aside && <div className="page-hero__aside" data-reveal>{aside}</div>}
        </div>
      </div>
      <span className="page-hero__rule" data-reveal="rule" aria-hidden="true" />
    </section>
  )
}

/** Deterministic survey-style contour lines; decorative only. */
export function Contours({ rings = 9, seed = 1, className = '' }: { rings?: number; seed?: number; className?: string }) {
  const paths = Array.from({ length: rings }, (_, k) => {
    const points = Array.from({ length: 73 }, (_, j) => {
      const t = (j / 72) * Math.PI * 2
      const r = 22 + k * 15 + 7 * Math.sin(3 * t + seed + k * 0.35) + 4 * Math.cos(5 * t - seed * 1.7)
      return `${(200 + r * Math.cos(t) * 1.25).toFixed(1)},${(200 + r * Math.sin(t)).toFixed(1)}`
    })
    return `M${points.join('L')}Z`
  })
  return (
    <svg className={`contours ${className}`} viewBox="0 0 400 400" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      {paths.map((d, i) => <path key={i} d={d} style={{ '--i': i } as CSSProperties} pathLength={1} />)}
    </svg>
  )
}

/** Illustrative project covers: typographic artwork, not product screenshots. */
export function ContactBand({ title = 'Have a problem worth solving?' }: { title?: string }) {
  return (
    <section className="cta-band">
      <div className="wrap cta-band__inner">
        <Kicker index="→">Next step</Kicker>
        <h2 data-reveal="words"><Split text={title} /></h2>
        <div className="cta-band__actions" data-reveal>
          <Link className="button button--ink button--large" to="/contact">
            Start a project <ArrowIcon />
          </Link>
          <p>Tell us where the friction is. We’ll help define a practical scope before anything is built.</p>
        </div>
      </div>
    </section>
  )
}

export function Snapshot({ src, domain, alt, eager = false }: { src: string; domain: string; alt: string; eager?: boolean }) {
  return (
    <figure className="snapshot">
      <div className="snapshot__bar" aria-hidden="true">
        <span /><span /><span />
        <em>{domain}</em>
      </div>
      <img src={src} alt={alt} width={1440} height={900} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    </figure>
  )
}

export function Partners() {
  return (
    <section className="partners" aria-labelledby="partners-title">
      <div className="wrap partners__inner">
        <p id="partners-title" className="mono">Trusted partner of</p>
        <ul>
          {projects.map((p) => (
            <li key={p.title}>
              <img src={p.logo} alt="" width={48} height={48} loading="lazy" />
              <span>{p.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
