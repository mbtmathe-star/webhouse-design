import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../../data/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logoLink} aria-label="The Web House – Home">
          {/*
            Replace the text below with an <img> once the logo file is added:
            <img src="/assets/images/logo/logo.png" alt="The Web House" height="36" />
          */}
          <span className={styles.logoText}>The Web House</span>
        </Link>

        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  [styles.navLink, isActive ? styles.active : ''].filter(Boolean).join(' ')
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.navRight}>
          <Link to="/contact" className={styles.ctaBtn}>
            Get a Quote
          </Link>
        </div>
      </nav>
    </header>
  )
}
