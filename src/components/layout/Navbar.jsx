import { Link, NavLink } from 'react-router-dom'
import { company } from '../../data/company'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">

        {/* Left — navigation links */}
        <div className={styles.navLinks}>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : undefined}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? styles.active : undefined}>Services</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? styles.active : undefined}>Portfolio</NavLink>
        </div>

        {/* Centre — logo */}
        <Link to="/" className={styles.logoLink} aria-label="The Web House — Home">
          <img src="/images/brand/web-house-logo.png" className={styles.logo} alt="The Web House" />
        </Link>

        {/* Right — since year + CTA */}
        <div className={styles.navRight}>
          <span>Since {company.founded}</span>
          <Link to="/contact" className={styles.btn}>Contact</Link>
        </div>

      </nav>
    </header>
  )
}
