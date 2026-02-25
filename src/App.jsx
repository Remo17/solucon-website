import './App.css'

const CONTACT = {
  phoneDisplay: '+27 831 1449',
  phoneTel: '+278311449', // best effort based on what you gave (edit if needed)
  email: 'tjiaremo@gmail.com',
  address: '178 Kerk Street, Modimolle',
  mapsUrl: 'https://www.google.com/maps?q=178+Kerk+Street+Modimolle',
  mapsEmbed: 'https://www.google.com/maps?q=178+Kerk+Street+Modimolle&output=embed',
}

const SERVICES = [
  {
    title: 'Digital Transformation',
    text: 'Modernizing systems, automating workflows, and improving reliability.',
  },
  {
    title: 'Strategic Consulting',
    text: 'Clear roadmaps, practical decisions, and delivery-focused execution.',
  },
  {
    title: 'EdTech Solutions',
    text: 'Digitizing learning content and building tools that scale education.',
  },
]

const TEAM = [
  { name: 'Willie Van Rooyen', role: 'Co-Founder' },
  { name: 'Remoratile Tjia', role: 'Co-Founder • Lead Engineer' }, // you directly under Willie
]

function App() {
  return (
    <div className="app-container">
      {/* HEADER */}
      <header id="header">
        <div className="header-inner">
          <div className="brand">
            <img src="/soluconlogo.jpg" alt="Solucon logo" />
            <span>SOLUCON</span>
          </div>

          <nav id="nav-bar">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#team">Team</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero">
          <div className="container heroGrid">
            <div>
              <div className="pill">Consulting • EdTech • Automation</div>
              <h1 className="heroTitle">
                Solving complex challenges, <span className="grad">simply</span>.
              </h1>
              <p className="heroText">
                We build modern software and practical solutions that help businesses and education move faster—without chaos.
              </p>

              <div className="heroActions">
                <a href="#contact" className="btn btnPrimary">Start a Project</a>
                <a href="#services" className="btn btnGhost">View Services</a>
              </div>
            </div>

            <div className="heroCard">
              <div className="kpi">
                <div className="kpiRow">
                  <div className="kpiTop">Fast, clean delivery</div>
                  <div className="kpiBot">Modern UI • Solid engineering</div>
                </div>
                <div className="kpiRow">
                  <div className="kpiTop">Built for real users</div>
                  <div className="kpiBot">Simple flows • Clear value</div>
                </div>
                <div className="kpiRow">
                  <div className="kpiTop">Local & available</div>
                  <div className="kpiBot">{CONTACT.address}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Our Mission</h2>
              <p>
                Solucon is a two-founder startup by Willie Van Rooyen and Remoratile Tjia,
                focused on building technology that modernises education and solves practical problems.
              </p>
            </div>

            <div className="grid3">
              <div className="card">
                <p className="cardTitle">Education</p>
                <p className="cardValue">Digitise learning</p>
                <p className="cardText">Tools and platforms that make studying and teaching easier.</p>
              </div>
              <div className="card">
                <p className="cardTitle">Business</p>
                <p className="cardValue">Automate & scale</p>
                <p className="cardText">Clean systems that remove manual work and reduce mistakes.</p>
              </div>
              <div className="card">
                <p className="cardTitle">Impact</p>
                <p className="cardValue">Build for SA</p>
                <p className="cardText">Solutions that help close gaps and expand opportunity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Core Services</h2>
              <p>Focused offerings — built to ship and last.</p>
            </div>

            <div className="grid3">
              {SERVICES.map((s) => (
                <div className="card" key={s.title}>
                  <p className="cardTitle">{s.title}</p>
                  <p className="cardText">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Leadership</h2>
              <p>You are placed directly under Willie (as requested).</p>
            </div>

            <div className="grid3">
              {TEAM.map((m) => (
                <div className="card" key={m.name}>
                  <p className="cardValue">{m.name}</p>
                  <p className="cardText">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Get In Touch</h2>
              <p>Ready to build? Call, email, or visit — we’ll respond.</p>
            </div>

            <div className="grid3 contactGrid">
              <a className="card" href={`tel:${CONTACT.phoneTel}`}>
                <p className="cardTitle">Phone</p>
                <p className="cardValue">{CONTACT.phoneDisplay}</p>
                <p className="cardText">Tap to call</p>
              </a>

              <a className="card" href={`mailto:${CONTACT.email}`}>
                <p className="cardTitle">Email</p>
                <p className="cardValue">{CONTACT.email}</p>
                <p className="cardText">Tap to email</p>
              </a>

              <a className="card" href={CONTACT.mapsUrl} target="_blank" rel="noreferrer">
                <p className="cardTitle">Location</p>
                <p className="cardValue">{CONTACT.address}</p>
                <p className="cardText">Open in Maps</p>
              </a>
            </div>

            <div className="mapWrap">
              <iframe
                title="Solucon Location"
                src={CONTACT.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Solucon. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App