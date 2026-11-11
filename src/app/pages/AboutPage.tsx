import { ContactBand, Kicker, PageHero, Split } from '../components'
import { principles, team } from '../data'

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="About"
        title="Local insight. Careful execution."
        intro="Solucon is a South African technology studio building clean, dependable systems for business and education."
      />

      <section className="manifesto section">
        <div className="wrap manifesto__grid">
          <Kicker index="01">Point of view</Kicker>
          <p data-scrub>
            <Split text="The best technology disappears into the work. Our job sits where useful design, sound engineering and practical problem-solving meet — making every task clearer and every decision easier." />
          </p>
        </div>
      </section>

      <section className="team section section--ink">
        <div className="wrap">
          <div className="section-head section-head--light">
            <Kicker index="02" tone="light">People</Kicker>
            <h2 data-reveal="words"><Split text="A small team, close to the work." /></h2>
            <p data-reveal>The people who scope, design and engineer every project.</p>
          </div>
          <ul className="team__grid" data-reveal="stagger">
            {team.map((m) => (
              <li key={m.name} className="member">
                <figure className="member__photo">
                  <span className="member__initials" aria-hidden="true">{m.name.split(' ').map((w) => w[0]).filter((c) => c === c.toUpperCase()).join('')}</span>
                  <img src={m.image} alt={`Portrait of ${m.name}`} loading="lazy" decoding="async" onError={(e) => { e.currentTarget.hidden = true }} />
                </figure>
                <span className="mono member__role">{m.role}</span>
                <h3>{m.name}</h3>
                <p>{m.note}</p>
                <a className="link-underline link-underline--light" href={m.linkedin} target="_blank" rel="noreferrer">
                  {m.name.split(' ')[0]} on LinkedIn
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="principles section">
        <div className="wrap">
          <div className="section-head">
            <Kicker index="03">Principles</Kicker>
            <h2 data-reveal="words"><Split text="How we show up." /></h2>
          </div>
          <ol className="principle-grid" data-reveal="stagger">
            {principles.map(([title, text], i) => (
              <li key={title}>
                <span className="principle-grid__no">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="facts section section--rule">
        <div className="wrap facts__grid" data-reveal="stagger">
          <div><span className="mono">Based in</span><strong>Modimolle, South Africa</strong></div>
          <div><span className="mono">Disciplines</span><strong>Design, engineering &amp; strategy</strong></div>
          <div><span className="mono">Works with</span><strong>Businesses &amp; educators</strong></div>
        </div>
      </section>
      <ContactBand />
    </>
  )
}
