import { Link } from 'react-router'
import { ArrowIcon, ContactBand, Contours, Kicker, Partners, Snapshot, Split } from '../components'
import { projects, services } from '../data'

const process = [
  ['Discover', 'We map the workflow, the people involved and the friction worth removing.'],
  ['Define', 'Scope, access requirements and handover are agreed before development starts.'],
  ['Build', 'Design and engineering in visible increments — no black box.'],
  ['Hand over', 'Documentation and a clear plan for what you own and maintain next.'],
]

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Contours className="hero__contours" rings={14} seed={0.6} />
        <div className="wrap hero__inner">
          <div className="hero__meta" data-reveal>
            <span>Independent digital studio</span>
            <span>Modimolle, South Africa</span>
          </div>
          <h1 className="hero__title" data-reveal="words">
            <Split text="Software that makes the work feel" />{' '}
            <mark><Split text="simpler." start={6} /></mark>
          </h1>
          <div className="hero__base">
            <p className="lead" data-reveal>
              We build software, websites and learning platforms, and set up the domains, hosting, HTTPS
              and business email behind them, for businesses and schools.
            </p>
            <div className="hero__actions" data-reveal>
              <Link className="button button--signal button--large" to="/contact">
                Discuss your project <ArrowIcon />
              </Link>
              <Link className="link-underline link-underline--light" to="/work">See the work</Link>
            </div>
          </div>
        </div>
        <figure className="hero__figure wrap" data-reveal="clip">
          <img
            src="/assets/collaboration-1200.jpg"
            srcSet="/assets/collaboration-640.jpg 640w, /assets/collaboration-1200.jpg 1200w"
            sizes="(max-width: 900px) 100vw, 1360px"
            width={1200}
            height={801}
            alt="A team reviewing work together around a laptop"
            fetchPriority="high"
            decoding="async"
          />
          <figcaption>
            <span>For</span> Businesses · Educators · Institutions
          </figcaption>
        </figure>
      </section>

      <section className="statement">
        <div className="wrap statement__grid">
          <Kicker index="01">What we solve</Kicker>
          <p data-scrub>
            <Split text="Good technology disappears into the work. We connect fragmented processes, replace repetitive tasks and build software people actually want to use." />
          </p>
        </div>
      </section>

      <section className="capabilities section">
        <div className="wrap">
          <div className="section-head">
            <Kicker index="02">Capabilities</Kicker>
            <h2 data-reveal="words"><Split text="One team for everything online." /></h2>
            <p data-reveal>Each starts with a problem you already recognise, not a technology you need to choose.</p>
          </div>
          <ol className="capability-list" data-reveal="rows">
            {services.map((s) => (
              <li key={s.slug}>
                <Link className="capability" to={`/services#${s.slug}`}>
                  <span className="capability__no">{s.number}</span>
                  <span className="capability__title">{s.title}</span>
                  <span className="capability__need">“{s.need}”</span>
                  <span className="capability__arrow"><ArrowIcon /></span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-work section section--ink">
        <div className="wrap">
          <div className="section-head section-head--light">
            <Kicker index="03" tone="light">Selected work</Kicker>
            <h2 data-reveal="words"><Split text="Two organisations. Two different problems." /></h2>
            <p data-reveal>A company website for a surveying practice and a learning platform for a school.</p>
          </div>
          <div className="work-pair">
            {projects.map((p) => (
              <Link to="/work" className="work-tile" key={p.title} data-reveal="clip">
                <Snapshot src={p.image} domain={p.domain} alt={`${p.title} screen`} />
                <div className="work-tile__info">
                  <span className="mono">{p.number} · {p.category} · {p.platform}</span>
                  <h3>{p.title}</h3>
                  <span className="work-tile__go">View case study <ArrowIcon /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="wrap">
          <div className="section-head">
            <Kicker index="04">How we work</Kicker>
            <h2 data-reveal="words"><Split text="Close collaboration. No black box." /></h2>
            <p data-reveal>You always know what is being built, why it matters and what comes next.</p>
          </div>
          <ol className="process-track" data-reveal="stagger">
            {process.map(([title, text], i) => (
              <li key={title}>
                <span className="process-track__no">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Partners />
      <ContactBand />
    </>
  )
}
