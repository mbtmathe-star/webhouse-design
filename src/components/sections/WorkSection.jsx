import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import styles from './WorkSection.module.css'

const MARQUEE_TEXT =
  'Request Quote ✦ Website Development ✦ Graphic Design ✦ Printing ✦ Marketing ✦ Software Development ✦ IT Support ✦ Motion Graphics ✦ IT Consulting ✦ '

export default function WorkSection() {
  const [ref, visible] = useReveal(0.08)

  return (
    <section
      ref={ref}
      className={`${styles.work} ${visible ? styles.visible : ''}`}
      id="work"
    >
      <div className={styles.marquee} aria-hidden="true">
        {MARQUEE_TEXT.repeat(3)}
      </div>

      <div className={styles.workCard}>
        <h2>
          Let&apos;s Work<br />
          Together
        </h2>

        <img
          className={styles.mini}
          src="/images/portfolio/work-sample.jpg"
          alt="Portfolio sample"
        />

        <p>
          Start your request and The Web House team will review your requirements before
          preparing a customised quotation.
        </p>

        <Link to="/contact" className={styles.down} aria-label="Request a quote">
          ↓
        </Link>
      </div>
    </section>
  )
}
