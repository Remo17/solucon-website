import { useState, type FormEvent } from 'react'
import { ArrowIcon, Kicker, PageHero } from '../components'
import { services } from '../data'

const steps = [
  ['You prepare', 'Fill in the brief. Submitting opens a pre-written draft in your own email app.'],
  ['You send', 'Review the draft and send it yourself. Nothing is transmitted by this website.'],
  ['We reply', 'We respond by email to talk through goals, constraints and a sensible first step.'],
]

export default function ContactPage() {
  const [draftOpened, setDraftOpened] = useState(false)
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = [
      `Name: ${String(data.get('name')).trim()}`,
      `Email: ${String(data.get('email')).trim()}`,
      `Company: ${String(data.get('company') || 'Not supplied').trim()}`,
      `Area: ${String(data.get('area') || 'Not sure yet')}`,
      '',
      String(data.get('brief')).trim(),
    ].join('\n')
    window.location.href = `mailto:soluconza@gmail.com?subject=${encodeURIComponent('Project enquiry — Solucon')}&body=${encodeURIComponent(body)}`
    setDraftOpened(true)
  }
  return (
    <>
      <PageHero
        index="04"
        eyebrow="Contact"
        title="Let’s solve something that matters."
        intro="Tell us what you are working on, where the friction is and what a better outcome would look like."
      />
      <section className="contact-page section">
        <div className="wrap contact-page__grid">
          <aside className="contact-side">
            <Kicker index="Direct">Prefer email?</Kicker>
            <a className="contact-side__email" href="mailto:soluconza@gmail.com">soluconza@gmail.com</a>
            <p className="contact-side__address">178 Kerk Street<br />Modimolle, South Africa</p>
            <ol className="contact-steps" data-reveal="stagger">
              {steps.map(([title, text], i) => (
                <li key={title}><span className="mono">0{i + 1}</span><div><strong>{title}</strong><p>{text}</p></div></li>
              ))}
            </ol>
          </aside>

          <form className="contact-form" onSubmit={prepareEmail} aria-describedby="enquiry-help">
            <p className="form-note form-note--lead" id="enquiry-help">
              This form opens a draft in your email app — nothing is submitted through this website.
            </p>
            <div className="field-row">
              <label className="field">
                <span>Your name</span>
                <input required name="name" type="text" autoComplete="name" maxLength={120} placeholder="How should we address you?" />
              </label>
              <label className="field">
                <span>Email address</span>
                <input required name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@company.com" />
              </label>
            </div>
            <label className="field">
              <span>Company or organisation <em>(optional)</em></span>
              <input name="company" type="text" autoComplete="organization" maxLength={160} placeholder="Where do you work?" />
            </label>
            <fieldset className="chips">
              <legend>Closest area <em>(optional)</em></legend>
              {[...services.map((s) => s.title), 'Not sure yet'].map((label) => (
                <label key={label}>
                  <input type="radio" name="area" value={label} />
                  <span>{label}</span>
                </label>
              ))}
            </fieldset>
            <label className="field">
              <span>What can we help with?</span>
              <textarea required name="brief" rows={6} maxLength={1500} placeholder="What do you need to improve? Include goals, timeline and budget if known." />
            </label>
            <p className="form-note">Please don’t include passwords, financial details or other sensitive information.</p>
            <div className="form-submit">
              <button className="button button--signal button--large" type="submit">Prepare email draft <ArrowIcon /></button>
              <p className="form-note" role="status">
                {draftOpened
                  ? 'Your email app has been requested. Nothing has been sent yet. If no draft appeared, email soluconza@gmail.com directly.'
                  : 'No email app set up? Email soluconza@gmail.com from your usual webmail.'}
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
