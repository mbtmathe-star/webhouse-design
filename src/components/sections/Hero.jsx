import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="The Web House hero">
      <div className={styles.heroContent}>
        <span className={styles.label}>Digital solutions that deliver</span>
        <h1>
          Helping Brands<br />
          Look <span className={styles.accent}>Professional</span><br />
          Work Smarter
        </h1>
        <p className={styles.subline}>
          The Web House is a Gauteng-based creative digital and technology agency
          helping businesses build stronger brands, professional websites and reliable
          digital systems.
        </p>
        <div className={styles.heroCtas}>
          <Link to="/contact" className={styles.heroCtaPrimary}>Start a Project</Link>
          <Link to="/services" className={styles.heroCtaSecondary}>View Services</Link>
        </div>
      </div>
    </section>
  )
}
