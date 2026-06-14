import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { useReveal } from '../hooks/useReveal'
import ServiceCard from '../components/cards/ServiceCard'
import styles from './Services.module.css'

function ServicesGrid() {
  const [ref, visible] = useReveal(0.04)
  return (
    <section
      id="services-grid"
      ref={ref}
      className={`${styles.gridSection} ${visible ? styles.gridVisible : ''}`}
    >
      <div className={styles.gridInner}>
        <div className={styles.splitTitle}>
          <h2>What We<br />Offer</h2>
          <div>
            <p>
              The Web House provides creative digital and technology solutions for
              businesses that need professional branding, strong online platforms,
              reliable systems and practical technology support.
            </p>
            <p style={{ marginTop: '12px', fontSize: '13px', color: 'rgba(255,255,255,.70)' }}>
              Choose the service that best matches your need. If you are unsure where
              to start, send a general enquiry and our team will help guide you toward
              the right solution.
            </p>
          </div>
          <h2 className={styles.right}>For<br />Business</h2>
        </div>
        <div className={styles.grid}>
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              {...service}
              index={i}
              sectionVisible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesCta() {
  const [ref, visible] = useReveal(0.1)
  return (
    <section
      ref={ref}
      className={`${styles.cta} ${visible ? styles.ctaVisible : ''}`}
    >
      <div className={styles.ctaInner}>
        <p className={styles.ctaEyebrow}>Let&apos;s get started</p>
        <h2 className={styles.ctaHeading}>
          Ready to Start<br />Your Project?
        </h2>
        <p className={styles.ctaSub}>
          Tell us what you need and we&apos;ll review your requirements before
          preparing a customised quotation based on your selected service,
          timeline and project scope.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className={styles.ctaBtn}>Start a Project</Link>
          <Link to="/contact" className={`${styles.ctaBtn} ${styles.ctaBtnSecondary}`}>Speak to Our Team</Link>
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <div className={styles.page}>

      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>What We Do</span>
          <h1 className={styles.heroHeading}>
            Our<br />
            <span className={styles.accent}>Services</span>
          </h1>
          <p className={styles.heroCopy}>
            The Web House provides creative digital and technology solutions for
            businesses that need professional branding, strong online platforms,
            reliable systems and practical technology support.
          </p>
          <div className={styles.heroGuide}>
            <p className={styles.heroGuideHeading}>
              Choose the service that best matches your need.
            </p>
            <p className={styles.heroGuideCopy}>
              If you are unsure where to start, send a general enquiry and our team
              will help guide you toward the right solution.
            </p>
            <div className={styles.heroGuideBtns}>
              <a href="#services-grid" className={styles.heroGuidePrimary}>
                View Service Details
              </a>
              <Link to="/contact" className={styles.heroGuideSecondary}>
                General Enquiry
              </Link>
            </div>
          </div>
        </div>
      </header>

      <ServicesGrid />
      <ServicesCta />

    </div>
  )
}
