import { Link } from 'react-router-dom'
import { company } from '../../data/company'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} id="contact">

      <div className={styles.footerTop}>

        {/* Column 1 — brand */}
        <div className={styles.brandCol}>
          <Link to="/" aria-label="The Web House — Home">
            {/*
              Replace span with <img> once logo file is added:
                public/images/brand/web-house-logo.png
            */}
            <span className={styles.footerLogo}>{company.name}</span>
          </Link>
          <p className={styles.brandDesc}>
            A full-service creative digital and technology agency helping businesses
            build professional brands, strong online platforms and reliable digital
            systems.
          </p>
        </div>

        {/* Column 2 — sitemap */}
        <div className={styles.sitemapCol}>
          <h4>Sitemap</h4>
          <nav aria-label="Footer navigation">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        {/* Column 3 — locations + CTA */}
        <div className={styles.locationsCol}>
          <h4>Locations</h4>
          {company.locations.map((loc) => (
            <p key={loc}>{loc}</p>
          ))}
          <p>Serving South Africa and Namibia</p>
          <br />
          <Link to="/contact" className={styles.footerEmail}>
            Request a Quote
          </Link>
        </div>

      </div>

      <h2 className={styles.footerBrand}>{company.name}*</h2>

      <div className={styles.footerBottom}>
        <span>&copy; {year} {company.name}. Founded {company.founded}.</span>
        <a href="#root" className={styles.backTop}>Back to top ↑</a>
      </div>

    </footer>
  )
}
