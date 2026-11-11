import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import { ArrowIcon, Logo } from './components'
import { useSiteMotion } from './motion'
import { usePageMetadata } from './metadata'

const navigation = [
  ['Services', '/services'],
  ['Work', '/work'],
  ['About', '/about'],
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const menuButton = useRef<HTMLButtonElement>(null)
  const previousPath = useRef(location.pathname)

  usePageMetadata(location.pathname)

  useEffect(() => {
    setMenuOpen(false)
    if (location.hash) {
      requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView())
    } else window.scrollTo(0, 0)
    if (previousPath.current !== location.pathname) {
      document.getElementById('main-content')?.focus({ preventScroll: true })
      previousPath.current = location.pathname
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    if (!menuOpen) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    const resize = () => window.innerWidth > 900 && setMenuOpen(false)
    document.addEventListener('keydown', close)
    window.addEventListener('resize', resize)
    return () => {
      document.removeEventListener('keydown', close)
      window.removeEventListener('resize', resize)
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  useSiteMotion(location.pathname)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="site-header">
        <div className="wrap header-inner">
          <Logo inverse />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(([label, path], i) => (
              <NavLink key={path} to={path}>
                <span className="nav-index" aria-hidden="true">0{i + 1}</span>
                {label}
              </NavLink>
            ))}
          </nav>
          <Link className="button button--signal header-cta" to="/contact">
            Start a project <ArrowIcon />
          </Link>
          <button
            ref={menuButton}
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="menu-button__text" aria-hidden="true">{menuOpen ? 'Close' : 'Menu'}</span>
            <span className={`menu-icon ${menuOpen ? 'is-open' : ''}`} aria-hidden="true"><span /><span /></span>
          </button>
        </div>
        <div id="mobile-navigation" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} inert={!menuOpen}>
          <nav aria-label="Mobile navigation" className="wrap">
            {[...navigation, ['Contact', '/contact']].map(([label, path], i) => (
              <NavLink key={path} to={path} style={{ '--ci': i } as React.CSSProperties}>
                <span className="nav-index" aria-hidden="true">0{i + 1}</span>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="wrap mobile-menu__foot">
            <a href="mailto:soluconza@gmail.com">soluconza@gmail.com</a>
            <span>Modimolle, South Africa</span>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} key={location.pathname} className="page-transition">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-lead">
            <p className="kicker kicker--light"><span>Write to us</span></p>
            <a className="footer-email" href="mailto:soluconza@gmail.com">
              soluconza@gmail.com <ArrowIcon direction="up-right" />
            </a>
          </div>
          <div className="footer-grid">
            <div className="footer-brand">
              <Logo inverse />
              <p>Software, websites, domains, hosting and business email for businesses and schools.</p>
            </div>
            <div className="footer-col">
              <span>Navigate</span>
              <Link to="/">Home</Link>
              {navigation.map(([label, path]) => <Link key={path} to={path}>{label}</Link>)}
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <span>Studio</span>
              <a href="https://www.google.com/maps?q=178+Kerk+Street+Modimolle" target="_blank" rel="noreferrer">
                178 Kerk Street<br />Modimolle, South Africa
              </a>
            </div>
            <div className="footer-col">
              <span>Elsewhere</span>

              <a href="https://www.linkedin.com/in/remoratile-tjia-412772205/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Solucon</span>
            <span>Designed and built in South Africa</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
