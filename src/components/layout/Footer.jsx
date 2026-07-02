import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { company } from '../../data/company'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const brandRef = useRef(null)
  const [waveActive, setWaveActive] = useState(false)

  useEffect(() => {
    const el = brandRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWaveActive(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const chars = company.name.toUpperCase().split('')

  return (
    <footer className={styles.footer} id="contact">

      <div className={styles.footerTop}>

        {/* Column 1 — brand */}
        <div className={styles.brandCol}>
          <Link to="/" aria-label="The Web House — Home">
            <div className={styles.footerLogo}>
              <img src="/images/brand/web-house-logo-transparent.png" alt="The Web House" />
            </div>
          </Link>
          <p className={styles.brandDesc}>
            {company.name} is a creative digital and technology agency helping
            businesses build stronger brands, professional websites, reliable digital
            systems and practical technology solutions.
          </p>
          <p className={styles.tagline}>{company.tagline}</p>
        </div>

        {/* Column 2 — quick links */}
        <div className={styles.sitemapCol}>
          <h4>Quick Links</h4>
          <nav aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        {/* Column 3 — locations + CTA */}
        <div className={styles.locationsCol}>
          <h4>Locations</h4>
          <p className={styles.locationsText}>
            Based in Gauteng with presence in Hartbeespoort and Lanseria.
            Serving clients across South Africa and Namibia.
          </p>
          <div className={styles.footerCta}>
            <p className={styles.footerCtaLabel}>Have a project in mind?</p>
            <p className={styles.footerCtaText}>
              Tell us what you need and we&apos;ll guide you toward the right solution.
            </p>
            <Link to="/contact" className={styles.footerCtaBtn}>
              Start a Project
            </Link>
          </div>
        </div>

      </div>

      <h2
        ref={brandRef}
        className={styles.footerBrand}
        aria-label={company.name}
      >
        {chars.map((char, i) =>
          char === ' ' ? (
            <span key={i} className={styles.brandSpace}>&nbsp;</span>
          ) : (
            <span
              key={i}
              className={`${styles.brandLetter}${waveActive ? ` ${styles.waveActive}` : ''}`}
              style={{ '--i': i }}
            >
              {char}
            </span>
          )
        )}
      </h2>

      <div className={styles.footerBottom}>
        <span>&copy; {year} {company.name}. Founded {company.founded}.</span>
        <a href="#root" className={styles.backTop}>Back to top ↑</a>
      </div>

    </footer>
  )
}
