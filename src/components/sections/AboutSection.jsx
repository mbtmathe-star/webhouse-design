import { useReveal } from '../../hooks/useReveal'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  const [ref, visible] = useReveal(0.08)

  return (
    <section
      ref={ref}
      className={`${styles.section} ${visible ? styles.visible : ''}`}
      id="about"
    >
      <div className={styles.inner}>

        {/* Zone 1 — Badge + Heading */}
        <div className={styles.headline}>
          <span className={styles.badge}>Our Story</span>
          <h2>
            <span className={styles.dark}>Creative Digital</span><br />
            <span className={styles.dark}>And Technology</span><br />
            <span className={styles.white}>Solutions</span>
          </h2>
        </div>

        {/* Zone 2 — Paragraph */}
        <p className={styles.copy}>
          Founded in 2016 from humble beginnings in a garage, The Web House has grown
          into a creative digital and technology agency serving businesses across South
          Africa and Namibia. With over 300 clients served across different industries,
          we combine creativity, technology and strategy to help businesses look
          professional, work smarter and grow with confidence.
        </p>

        {/* Zone 3 — Decorative image pair (below text on all screen sizes) */}
        <div className={styles.imageRow} aria-hidden="true">
          <img
            src="/images/about/about-left.jpg"
            alt=""
            className={`${styles.imgCard} ${styles.imgLeft}`}
          />
          <img
            src="/images/about/about-right.jpg"
            alt=""
            className={`${styles.imgCard} ${styles.imgRight}`}
          />
        </div>

      </div>
    </section>
  )
}
