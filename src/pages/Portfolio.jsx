import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  const [ctaRef, ctaVisible] = useReveal(0.10)

  return (
    <div className={styles.page}>

      {/* ─── Hero ─── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Our Work</span>
          <h1 className={styles.heroHeading}>
            Our<br />
            <span className={styles.accent}>Work</span>
          </h1>
          <p className={styles.heroCopy}>
            Explore the type of creative, digital and technology work The Web House
            can deliver for businesses that want to look professional, work smarter
            and connect with customers more effectively.
          </p>
        </div>
      </header>

      {/* ─── Placeholder ─── */}
      <div className={styles.placeholder}>
        <p>
          Project examples can be added here to showcase completed websites, designs,
          campaigns, printed materials, systems and technology support work.
        </p>
      </div>

      {/* ─── CTA ─── */}
      <section
        ref={ctaRef}
        className={`${styles.cta} ${ctaVisible ? styles.ctaVisible : ''}`}
      >
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeading}>Have a project in mind?</h2>
          <p className={styles.ctaCopy}>
            Tell us what you need and we&apos;ll guide you toward the right creative,
            digital or technology solution.
          </p>
          <Link to="/contact" className={styles.ctaBtn}>Start a Project</Link>
        </div>
      </section>

    </div>
  )
}
