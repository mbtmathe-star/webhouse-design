import { Link, useLocation } from 'react-router-dom'
import styles from './MobileStickyCTA.module.css'

export default function MobileStickyCTA() {
  const { pathname } = useLocation()
  if (pathname === '/contact' || pathname.startsWith('/services/')) return null

  return (
    <div className={styles.bar} aria-label="Quick actions">
      <Link to="/services" className={styles.secondary}>View Services</Link>
      <Link to="/contact" className={styles.primary}>Start Project</Link>
    </div>
  )
}
