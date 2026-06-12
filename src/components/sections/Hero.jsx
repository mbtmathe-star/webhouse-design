import { Link } from 'react-router-dom'
import { company } from '../../data/company'
import styles from './Hero.module.css'

const SUBLINE =
  'The Web House is a Gauteng-based creative digital and technology agency helping businesses build stronger brands, professional websites and reliable digital systems.'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">

      {/* ── Left text panel ── */}
      <div className={styles.left}>
        <span className={styles.label}>Digital solutions that deliver</span>

        <h1 className={styles.heading}>
          Helping Brands<br />
          Look <span className={styles.accent}>Professional</span><br />
          Work Smarter
        </h1>

        <p className={styles.subline}>{SUBLINE}</p>

        <div className={styles.cta}>
          <Link to="/contact" className={styles.btnPrimary}>
            {company.cta.primary}
          </Link>
          <Link to="/services" className={styles.btnSecondary}>
            View Our Services
          </Link>
        </div>
      </div>

      {/* ── Right image panel ── */}
      <div className={styles.right}>
        <img
          src="/images/hero/web-house-hero.png"
          alt="The Web House – creative digital agency"
          className={styles.heroImg}
          loading="eager"
        />
      </div>

      {/* ── Decorative blobs (CSS-only animation) ── */}
      <div className={styles.blobs} aria-hidden="true">
        <span className={`${styles.blob} ${styles.blob1}`} />
        <span className={`${styles.blob} ${styles.blob2}`} />
        <span className={`${styles.blob} ${styles.blob3}`} />
      </div>

    </section>
  )
}
