import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { services } from '../data/services'
import { useReveal } from '../hooks/useReveal'
import styles from './ServiceDetail.module.css'

function NotFound() {
  return (
    <div className={styles.notFound}>
      <p className={styles.notFoundEyebrow}>404</p>
      <h1>Service Not Found</h1>
      <p className={styles.notFoundCopy}>
        We couldn&apos;t find that service. Browse all services below.
      </p>
      <Link to="/services" className={styles.backBtn}>← Back to Services</Link>
    </div>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  const [imgError, setImgError] = useState(false)
  const [contentRef, contentVisible] = useReveal(0.05)
  const [ctaRef, ctaVisible] = useReveal(0.1)

  if (!service) return <NotFound />

  return (
    <div className={styles.page}>

      {/* ─── Hero ─── */}
      <header className={styles.hero}>
        <div className={styles.heroWrap}>
          <Link to="/services" className={styles.breadcrumb}>← All Services</Link>
          <div className={styles.heroGrid}>

            <div className={styles.heroText}>
              <div className={styles.heroNumber}>{service.number}</div>
              <h1 className={styles.heroTitle}>{service.title}</h1>
              <p className={styles.heroIntro}>{service.pageIntro}</p>
            </div>

            <div className={styles.heroImageCol}>
              {!imgError ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.heroImg}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className={styles.heroImgPlaceholder} aria-hidden="true" />
              )}
            </div>

          </div>
        </div>
      </header>

      {/* ─── Content ─── */}
      <section
        ref={contentRef}
        className={`${styles.content} ${contentVisible ? styles.contentVisible : ''}`}
      >
        <div className={styles.contentInner}>

          <div className={styles.included}>
            <span className={styles.sectionLabel}>What&apos;s Included</span>
            <ul className={styles.bullets}>
              {service.bulletPoints.map((point, i) => (
                <li
                  key={i}
                  className={styles.bullet}
                  style={{ '--i': i }}
                >
                  <span className={styles.bulletDot} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.helps}>
            <span className={styles.sectionLabel}>What This Helps With</span>
            <p className={styles.helpsCopy}>
              {service.pageIntro} Our team works with businesses across South
              Africa and Namibia to deliver {service.title.toLowerCase()} solutions
              that are professional, reliable and built around your goals.
            </p>
          </div>

        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        ref={ctaRef}
        className={`${styles.cta} ${ctaVisible ? styles.ctaVisible : ''}`}
      >
        <div className={styles.ctaInner}>
          <p className={styles.ctaEyebrow}>Ready to get started?</p>
          <h2 className={styles.ctaHeading}>
            Request<br />a Quote
          </h2>
          <p className={styles.ctaSub}>
            Tell us about your {service.title.toLowerCase()} requirements and
            we&apos;ll prepare a tailored quotation for you.
          </p>
          <div className={styles.ctaBtns}>
            <Link to="/contact" className={styles.ctaBtn}>Request a Quote</Link>
            <Link to="/services" className={styles.ctaSecondary}>All Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
