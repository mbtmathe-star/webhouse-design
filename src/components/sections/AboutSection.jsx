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

        {/* Desktop floating images — hidden on mobile via CSS */}
        <img
          className={`${styles.floatImg} ${styles.left}`}
          src="/images/about/about-left.jpg"
          alt=""
          aria-hidden="true"
        />
        <img
          className={`${styles.floatImg} ${styles.right}`}
          src="/images/about/about-right.jpg"
          alt=""
          aria-hidden="true"
        />

        <div className={styles.headline}>
          <span className={styles.badge}>Our Story</span>
          <h2>
            <span className={styles.dark}>Creative Digital</span><br />
            <span className={styles.dark}>And Technology</span><br />
            <span className={styles.white}>Solutions</span>
          </h2>
        </div>

        {/* Mobile-only image row — shown below heading on small screens */}
        <div className={styles.mobileImageRow} aria-hidden="true">
          <img
            src="/images/about/about-left.jpg"
            alt=""
            className={styles.mobileImg}
          />
          <img
            src="/images/about/about-right.jpg"
            alt=""
            className={styles.mobileImg}
          />
        </div>

        <p className={styles.copy}>
          Founded in 2016 from humble beginnings in a garage, The Web House has grown
          into a creative digital and technology agency serving businesses across South
          Africa and Namibia. With over 300 clients served across different industries,
          we combine creativity, technology and strategy to help businesses look
          professional, work smarter and grow with confidence.
        </p>

      </div>
    </section>
  )
}
