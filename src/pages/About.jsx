import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

export default function About() {
  const [storyRef, storyVisible] = useReveal(0.08)
  const [missionRef, missionVisible] = useReveal(0.08)
  const [locationRef, locationVisible] = useReveal(0.08)
  const [ctaRef, ctaVisible] = useReveal(0.10)

  return (
    <div className={styles.page}>

      {/* ─── Hero ─── */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroBadge}>About</span>
          <h1 className={styles.heroHeading}>
            About<br />
            <span className={styles.heroAccent}>The Web House</span>
          </h1>
          <p className={styles.heroSub}>
            The Web House is a creative digital and technology agency built to help
            businesses look professional, work smarter and grow with confidence.
          </p>
        </div>
      </header>

      {/* ─── Story ─── */}
      <section
        ref={storyRef}
        className={`${styles.story} ${storyVisible ? styles.storyVisible : ''}`}
      >
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>Our Story</span>
          <h2 className={styles.sectionHeading}>
            Where Creativity<br />Meets Technology
          </h2>
          <div className={styles.storyBody}>
            <p>
              Founded in 2016 from humble beginnings in a garage, The Web House has
              grown into a creative digital and technology agency serving businesses
              across South Africa and Namibia.
            </p>
            <p>
              With over 300 clients served across different industries, The Web House
              brings together creativity, technology and strategy to deliver practical
              solutions across branding, websites, software, printing, marketing,
              motion graphics and IT support.
            </p>
          </div>
          <div className={styles.storyStats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>2016</span>
              <span className={styles.statLabel}>Founded</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>300+</span>
              <span className={styles.statLabel}>Clients Served</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>8</span>
              <span className={styles.statLabel}>Services Offered</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mission ─── */}
      <section
        ref={missionRef}
        className={`${styles.mission} ${missionVisible ? styles.missionVisible : ''}`}
      >
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>Our Mission</span>
          <h2 className={styles.sectionHeading}>What We Do</h2>
          <p className={styles.sectionCopy}>
            We help businesses build stronger brands, professional websites, reliable
            digital systems and practical technology solutions that support how they
            work and connect with customers.
          </p>
        </div>
      </section>

      {/* ─── Location ─── */}
      <section
        ref={locationRef}
        className={`${styles.location} ${locationVisible ? styles.locationVisible : ''}`}
      >
        <div className={styles.sectionInner}>
          <span className={`${styles.eyebrow} ${styles.eyebrowLight}`}>Location</span>
          <h2 className={`${styles.sectionHeading} ${styles.headingLight}`}>
            Based in Gauteng.<br />Serving South Africa and Namibia.
          </h2>
          <p className={`${styles.sectionCopy} ${styles.copyLight}`}>
            The Web House is based in Gauteng, with presence in Hartbeespoort and
            Lanseria, and serves clients across South Africa and Namibia.
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        ref={ctaRef}
        className={`${styles.cta} ${ctaVisible ? styles.ctaVisible : ''}`}
      >
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeading}>
            Ready to build something<br />professional?
          </h2>
          <p className={styles.ctaCopy}>
            Tell us what you need and we&apos;ll help guide your project from idea to delivery.
          </p>
          <Link to="/contact" className={styles.ctaBtn}>Start a Project</Link>
        </div>
      </section>

    </div>
  )
}
