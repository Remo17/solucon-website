import { ArrowIcon, ContactBand, Kicker, PageHero, Partners, Snapshot, Split } from '../components'
import { projects } from '../data'

export default function WorkPage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="Work"
        title="Work for real organisations."
        intro="A company website for a land surveying practice, and a learning platform for a secondary school."
      />

      <section className="cases">
        {projects.map((p) => (
          <article className="case" key={p.title} aria-labelledby={`case-${p.number}`}>
            <div className="wrap">
              <header className="case__head">
                <span className="mono case__no">{p.number}</span>
                <h2 id={`case-${p.number}`} data-reveal="words"><Split text={p.title} /></h2>
                <dl className="case__meta">
                  <div><dt>Client</dt><dd>{p.client}</dd></div>
                  <div><dt>Type</dt><dd>{p.category}</dd></div>
                  <div><dt>Built with</dt><dd>{p.platform}</dd></div>
                </dl>
              </header>
              {p.url ? (
                <a className="case__shot" href={p.url} target="_blank" rel="noreferrer" data-reveal="clip" aria-label={`Visit ${p.domain} (opens in a new tab)`}>
                  <Snapshot src={p.image} domain={p.domain} alt={`Home page of ${p.domain}`} eager={p.number === '01'} />
                </a>
              ) : (
                <div className="case__shot" data-reveal="clip">
                  <Snapshot src={p.image} domain={p.domain} alt={`${p.title} sign-in screen`} />
                </div>
              )}
              {p.gallery?.map((g) => (
                <figure className="case__extra" key={g.src} data-reveal="clip">
                  <Snapshot src={g.src} domain={p.domain} alt={`${p.title}: ${g.label}`} />
                  <figcaption className="mono">{g.label}</figcaption>
                </figure>
              ))}
              <div className="case__body">
                <p className="case__summary" data-reveal>{p.summary}</p>
                <div data-reveal>
                  <Kicker>What we did</Kicker>
                  <ol className="case__role">
                    {p.role.map((r) => <li key={r}>{r}</li>)}
                  </ol>
                  <p className="case__scope"><span className="mono">{p.url ? 'Pages' : 'Modules'}</span> {p.scope.join(' · ')}</p>
                  {p.url && (
                    <a className="button button--outline" href={p.url} target="_blank" rel="noreferrer">
                      Visit {p.domain} <ArrowIcon direction="up-right" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <Partners />
      <ContactBand title="Your organisation could be next." />
    </>
  )
}
