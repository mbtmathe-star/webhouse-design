import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import styles from './NotSureSection.module.css'

export default function NotSureSection() {
  const [ref, visible] = useReveal(0.10)

  return (
    <section
      ref={ref}
      className={`${styles.section} ${visible ? styles.visible : ''}`}
    >
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Need Direction?</p>
        <h2 className={styles.heading}>Not sure where to start?</h2>
        <p className={styles.copy}>
          Tell us what you need and we&apos;ll guide you toward the right creative,
          digital or technology solution.
        </p>
        <div className={styles.btns}>
          <Link to="/services" className={styles.btnSecondary}>View Services</Link>
          <Link to="/contact" className={styles.btnPrimary}>Start a Project</Link>
        </div>
      </div>
    </section>
  )
}
