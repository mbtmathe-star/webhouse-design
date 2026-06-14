import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { company } from '../../data/company'
import styles from './Navbar.module.css'

function navCls({ isActive }) {
  return isActive ? styles.active : undefined
}

function mobileCls({ isActive }) {
  return `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">

        {/* Desktop — left links */}
        <div className={styles.navLinks}>
          <NavLink to="/about" className={navCls}>About</NavLink>
          <NavLink to="/services" className={navCls}>Services</NavLink>
          <NavLink to="/portfolio" className={navCls}>Portfolio</NavLink>
        </div>

        {/* Centre — logo */}
        <Link to="/" className={styles.logoLink} aria-label="The Web House — Home">
          <img
            src="/images/brand/web-house-logo.png"
            className={styles.logo}
            alt="The Web House"
          />
        </Link>

        {/* Desktop — right */}
        <div className={styles.navRight}>
          <span className={styles.since}>Since {company.founded}</span>
          <Link to="/contact" className={styles.btn}>Contact</Link>
        </div>

        {/* Mobile — burger button */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        {/* Mobile — dropdown */}
        <div
          id="mobile-nav"
          className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`}
          aria-hidden={!open}
        >
          <NavLink to="/" end className={mobileCls} onClick={close}>Home</NavLink>
          <NavLink to="/about" className={mobileCls} onClick={close}>About</NavLink>
          <NavLink to="/services" className={mobileCls} onClick={close}>Services</NavLink>
          <NavLink to="/portfolio" className={mobileCls} onClick={close}>Portfolio</NavLink>
          <NavLink to="/contact" className={mobileCls} onClick={close}>Contact</NavLink>
          <Link to="/contact" className={styles.mobileCtaBtn} onClick={close}>
            Start a Project
          </Link>
        </div>

      </nav>
    </header>
  )
}
