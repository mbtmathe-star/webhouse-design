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
            Creative Digital<br />
            And Technology<br />
            <span className={styles.blue}>Solutions</span>
          </h2>
        </div>

        <p className={styles.copy}>
          Founded in 2016 from humble beginnings in a garage, The Web House has grown into
          a trusted agency serving over 300 clients across South Africa and Namibia. We
          combine creativity, technology and strategy to help businesses communicate better,
          attract more customers and operate with confidence.
        </p>

      </div>
    </section>
  )
}
