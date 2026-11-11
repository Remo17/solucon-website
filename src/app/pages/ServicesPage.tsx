import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowIcon, ContactBand, Kicker, PageHero, Split } from '../components'
import { services } from '../data'

export default function ServicesPage() {
  const [active, setActive] = useState(0)
  const current = services[active]
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Services"
        title="Start with the problem. We’ll shape the system."
        intro="From custom software and websites to domains, hosting, HTTPS and Google Workspace email. One team for everything your organisation runs on online."
      />

      <section className="finder section">
        <div className="wrap finder__grid">
          <div>
            <Kicker index="A">Find your starting point</Kicker>
            <h2 className="finder__title">Which of these sounds familiar?</h2>
            <div className="finder__options" role="group" aria-label="Choose the statement closest to your situation">
              {services.map((s, i) => (
                <button
                  key={s.slug}
                  type="button"
                  className="finder__option"
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                >
                  <span className="mono">{s.number}</span>
                  {s.need}
                </button>
              ))}
            </div>
          </div>
          <div className="finder__result" aria-live="polite" key={current.slug}>
            <span className="mono">Recommended</span>
            <h3>{current.title}</h3>
            <p>{current.short}</p>
            <a className="link-underline" href={`#${current.slug}`}>Read the detail</a>
          </div>
        </div>
      </section>

      <section className="service-chapters">
        {services.map((s, i) => (
          <article id={s.slug} className={`chapter chapter--${i % 2 ? 'ink' : 'paper'}`} key={s.slug}>
            <div className="wrap chapter__grid">
              <div className="chapter__index" data-reveal="words" aria-hidden="true"><Split text={s.number} /></div>
              <div className="chapter__body">
                <Kicker tone={i % 2 ? 'light' : undefined}>{s.tags.join(' · ')}</Kicker>
                <h2 data-reveal="words"><Split text={s.title} /></h2>
                <p className="lead" data-reveal>{s.description}</p>
              </div>
              <div className="chapter__aside" data-reveal>
                <p className="chapter__fit"><span className="mono">A good fit if</span>“{s.need}”</p>
                <span className="mono">What’s included</span>
                <ul data-reveal="stagger">
                  {s.deliverables.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="section engagement">
        <div className="wrap engagement__grid">
          <div>
            <Kicker index="B">Not sure where to start?</Kicker>
            <h2 data-reveal="words"><Split text="Start with a conversation, not a contract." /></h2>
          </div>
          <div data-reveal>
            <p className="lead">We’ll help shape the brief, identify the highest-value opportunity and define a practical path from idea to working product.</p>
            <Link className="button button--ink" to="/contact">Book a discovery conversation <ArrowIcon /></Link>
          </div>
        </div>
      </section>
      <ContactBand title="Tell us what’s slowing you down." />
    </>
  )
}
