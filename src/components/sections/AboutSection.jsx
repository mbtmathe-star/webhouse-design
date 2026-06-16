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

        {/* 3-column zone: [left image] [badge + heading] [right image]
            Each column is independent — zero text/image overlap is possible */}
        <div className={styles.headingZone}>
          <img
            className={`${styles.imgSide} ${styles.imgLeft}`}
            src="/images/about/about-left.jpg"
            alt=""
            aria-hidden="true"
          />

          <div className={styles.headingContent}>
            <span className={styles.badge}>Our Story</span>
            <h2>
              <span className={styles.dark}>Creative Digital</span><br />
              <span className={styles.dark}>And Technology</span><br />
              <span className={styles.white}>Solutions</span>
            </h2>
          </div>

          <img
            className={`${styles.imgSide} ${styles.imgRight}`}
            src="/images/about/about-right.jpg"
            alt=""
            aria-hidden="true"
          />
        </div>

        {/* Paragraph — always below the heading zone, no side images competing */}
        <p className={styles.copy}>
          Founded in 2016 from humble beginnings in a garage, The Web House has grown
          into a creative digital and technology agency serving businesses across South
          Africa and Namibia. With over 300 clients served across different industries,
          we combine creativity, technology and strategy to help businesses look
          professional, work smarter and grow with confidence.
        </p>

        {/* Mobile image row — only shown when side images are hidden (< 1000px) */}
        <div className={styles.mobileRow} aria-hidden="true">
          <img src="/images/about/about-left.jpg"  alt="" className={`${styles.mobileImg} ${styles.mobileLeft}`}  />
          <img src="/images/about/about-right.jpg" alt="" className={`${styles.mobileImg} ${styles.mobileRight}`} />
        </div>

      </div>
    </section>
  )
}
