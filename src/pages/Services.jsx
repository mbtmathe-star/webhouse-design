import { Link } from 'react-router-dom'
import { useState } from 'react'
import { services } from '../data/services'
import { useReveal } from '../hooks/useReveal'
import styles from './Services.module.css'

function ServicePanel({ service, index }) {
  const [ref, visible] = useReveal(0.08)
  const [imgError, setImgError] = useState(false)
  const isReversed = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`${styles.panel} ${visible ? styles.panelVisible : ''} ${isReversed ? styles.panelReverse : ''}`}
    >
      <div className={styles.panelImageCol}>
        {!imgError ? (
          <img
            src={service.image}
            alt={service.title}
            className={styles.panelImg}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles.panelImgFallback} aria-hidden="true" />
        )}
      </div>

      <div className={styles.panelContent}>
        <span className={styles.panelNum}>{service.number}</span>
        <h2 className={styles.panelTitle}>{service.title}</h2>
        <p className={styles.panelDesc}>{service.shortDescription}</p>
        {service.helpsWithPoints && (
          <ul className={styles.panelPoints}>
            {service.helpsWithPoints.slice(0, 3).map((point, i) => (
              <li key={i} className={styles.panelPoint}>
                <span className={styles.panelDot} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        )}
        <Link to={`/services/${service.slug}`} className={styles.panelCta}>
          Explore Service →
        </Link>
      </div>
    </div>
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
        <div className={styles.ctaBtns}>
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
          <span className={styles.badge}>What We Offer</span>
          <h1 className={styles.heroHeading}>
            Our <span className={styles.accent}>Services</span>
          </h1>
          <p className={styles.heroCopy}>
            The Web House provides creative digital and technology solutions for
            businesses that need professional branding, strong online platforms,
            reliable systems and practical technology support.
          </p>
        </div>
      </header>

      <section className={styles.panelsList}>
        <div className={styles.panelsInner}>
          {services.map((service, i) => (
            <ServicePanel key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      <ServicesCta />

    </div>
  )
}
