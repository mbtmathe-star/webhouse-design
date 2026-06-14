import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import styles from './NotSureSection.module.css'

export default function NotSureSection() {
  const [ref, visible] = useReveal(0.10)
  const [imgError, setImgError] = useState(false)

  return (
    <section
      ref={ref}
      className={`${styles.section} ${visible ? styles.visible : ''}`}
    >
      <div className={styles.inner}>

        {/* Text column */}
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>Need Direction?</p>
          <h2 className={styles.heading}>Not sure where<br />to start?</h2>
          <p className={styles.copy}>
            Tell us what you need and we&apos;ll guide you toward the right creative,
            digital or technology solution.
          </p>
          <div className={styles.btns}>
            <Link to="/services" className={styles.btnSecondary}>View Services</Link>
            <Link to="/contact" className={styles.btnPrimary}>Start a Project</Link>
          </div>
        </div>

        {/* Image column */}
        {!imgError && (
          <div className={styles.imageCol} aria-hidden="true">
            <img
              src="/images/sections/not-sure.jpg"
              alt=""
              className={styles.img}
              onError={() => setImgError(true)}
            />
            <div className={styles.imgOverlay} />
          </div>
        )}

      </div>
    </section>
  )
}
