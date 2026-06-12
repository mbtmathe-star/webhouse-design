import { Link } from 'react-router-dom'
import styles from './WorkSection.module.css'

const MARQUEE_TEXT =
  'Request Quote ✦ Website Development ✦ Graphic Design ✦ Printing ✦ Marketing ✦ Software Development ✦ IT Support ✦ Motion Graphics ✦ IT Consulting ✦ '

export default function WorkSection() {
  return (
    <section className={styles.work} id="work">
      {/* Static marquee behind the card */}
      <div className={styles.marquee} aria-hidden="true">
        {MARQUEE_TEXT.repeat(3)}
      </div>

      <div className={styles.workCard}>
        <h2>
          Let&apos;s Work<br />
          Together
        </h2>

        {/*
          Work sample image — add file to enable:
            public/images/portfolio/work-sample.jpg
        */}
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
