import { Link } from 'react-router-dom'
import { footerLinks } from '../../data/navigation'
import { company } from '../../data/company'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logoLink} aria-label="The Web House – Home">
            <span className={styles.logoText}>{company.name}</span>
          </Link>
          <p className={styles.tagline}>{company.tagline}</p>
          <p className={styles.location}>{company.location}</p>
        </div>

        <nav className={styles.sitemap} aria-label="Footer navigation">
          <h4 className={styles.sitemapHeading}>Sitemap</h4>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={styles.sitemapLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.locations}>
          <h4 className={styles.sitemapHeading}>Locations</h4>
          <p className={styles.locationText}>{company.location}</p>
        </div>

        <div className={styles.cta}>
          <Link to="/contact" className={styles.ctaLabel}>
            Request a Quote
          </Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.credits}>
          &copy; {year} {company.name}. Founded {company.founded}.
        </p>
        <a href="#root" className={styles.backToTop}>
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
