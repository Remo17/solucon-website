import { Link } from 'react-router'
import { ArrowIcon, Contours } from '../components'

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <Contours className="not-found__contours" rings={12} seed={3.1} />
      <div className="wrap not-found__inner">
        <span className="mono">Error 404 · Off the map</span>
        <h1>This page has moved beyond the survey lines.</h1>
        <div className="not-found__actions">
          <Link className="button button--signal" to="/">Return home <ArrowIcon /></Link>
          <Link className="link-underline link-underline--light" to="/work">Browse the work</Link>
        </div>
      </div>
    </section>
  )
}
