import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function navCls({ isActive }) {
  return `${styles.navLink}${isActive ? ` ${styles.active}` : ''}`
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

        {/* Logo — left */}
        <Link to="/" className={styles.logoLink} onClick={close} aria-label="The Web House — Home">
          <img
            src="/images/brand/web-house-logo.png"
            className={styles.logo}
            alt="The Web House"
          />
        </Link>

        {/* Desktop links — centre */}
        <div className={styles.navLinks}>
          <NavLink to="/" end className={navCls}>Home</NavLink>
          <NavLink to="/about" className={navCls}>About</NavLink>
          <NavLink to="/services" className={navCls}>Services</NavLink>
          <NavLink to="/portfolio" className={navCls}>Portfolio</NavLink>
          <NavLink to="/contact" className={navCls}>Contact</NavLink>
        </div>

        {/* Right — CTA + burger */}
        <div className={styles.navRight}>
          <Link to="/contact" className={styles.ctaBtn}>Start a Project</Link>

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
        </div>

        {/* Mobile dropdown */}
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
