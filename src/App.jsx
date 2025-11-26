import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* 1. HEADER */}
      <header id="header">
        <div className="logo">SOLUCON</div>
        <nav id="nav-bar">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#team">Team</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>
      </header>

      {/* 2. MAIN CONTENT */}
      <main>
        {/* HERO */}
        <section id="hero" className="section-padding">
          <div className="hero-content">
            <h1>Solving Complex Challenges, Simply.</h1>
            <p>Innovative consulting and technology solutions tailored to drive growth and efficiency for your business.</p>
            <a href="#contact" className="cta-button">Start a Project</a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-padding container">
          <h2>Our Mission</h2>
          <p>Solucon was founded on the principle of bridging the gap between innovative strategy and practical implementation.</p>
        </section>

        {/* SERVICES */}
        <section id="services" className="section-padding container">
          <h2>Core Services</h2>
          <div className="service-cards">
            <div className="card">
              <h3>Digital Transformation</h3>
              <p>Modernizing core systems and workflow automation.</p>
            </div>
            <div className="card">
              <h3>Strategic Consulting</h3>
              <p>Long-term business strategy development.</p>
            </div>
            <div className="card">
              <h3>EdTech Solutions</h3>
              <p>Digitizing learning material for the future of education.</p>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="section-padding container">
          <h2>Leadership</h2>
          <div className="team-grid">
            <div className="team-member">
              <h4>Willie Van Rooyen</h4>
              <p>Co-Founder</p>
            </div>
            <div className="team-member">
              <h4>Remoratile Tjia</h4>
              <p>Co-Founder & Lead Engineer</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-padding container">
          <h2>Get In Touch</h2>
          <p>Ready to digitize the future? Send us a message.</p>
          <div className="contact-box">
            <p>Email: contact@solucon.co.za</p>
            <p>Location: Modimolle, Limpopo</p>
          </div>
        </section>
      </main>

      {/* 3. FOOTER */}
      <footer>
        <p>&copy; 2025 Solucon. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App