import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import styles from './WorkSection.module.css'

const MARQUEE_TEXT =
  'Start a Project ✦ Website Development ✦ Graphic Design ✦ Printing ✦ Marketing ✦ Software Development ✦ IT Support ✦ Motion Graphics ✦ IT Consulting ✦ '

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
          Have a project in mind? Tell us what you need and we&apos;ll guide you
          toward the right creative, digital or technology solution.
        </p>

        <Link to="/contact" className={styles.ctaBtn}>
          Start a Project
        </Link>
      </div>
    </section>
  )
}
