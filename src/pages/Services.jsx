import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { services } from '../data/services'
import { useReveal } from '../hooks/useReveal'
import ServiceRequestForm from '../components/forms/ServiceRequestForm'
import styles from './Services.module.css'

/* ─── Inline expandable service panel ─── */
function ServicePanel({ service, index, isFormOpen, onToggleForm }) {
  const [ref, visible] = useReveal(0.05)
  const [imgError, setImgError] = useState(false)
  const formRef = useRef(null)
  const isReversed = index % 2 === 1

  useEffect(() => {
    if (isFormOpen && formRef.current) {
      const t = setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
      return () => clearTimeout(t)
    }
  }, [isFormOpen])

  return (
    <div
      id={service.slug}
      ref={ref}
      className={`${styles.panelWrapper} ${visible ? styles.panelVisible : ''}`}
    >
      {/* ─── Image + content grid ─── */}
      <div className={`${styles.panelGrid} ${isReversed ? styles.panelReverse : ''}`}>

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
            <div className={styles.pointsBlock}>
              <span className={styles.pointsLabel}>What this helps with</span>
              <ul className={styles.pointsList}>
                {service.helpsWithPoints.map((point, i) => (
                  <li key={i} className={styles.pointItem}>
                    <span className={styles.pointDot} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.bulletPoints && (
            <div className={styles.pointsBlock}>
              <span className={styles.pointsLabel}>What can be included</span>
              <ul className={`${styles.pointsList} ${styles.pointsGrid}`}>
                {service.bulletPoints.map((point, i) => (
                  <li key={i} className={styles.pointItem}>
                    <span className={styles.pointDot} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="button"
            className={`${styles.panelCta} ${isFormOpen ? styles.panelCtaActive : ''}`}
            onClick={() => onToggleForm(service.slug)}
          >
            {isFormOpen ? '✕ Close Form' : 'Start Project'}
          </button>
        </div>

      </div>

      {/* ─── Inline collapsible form ─── */}
      {isFormOpen && (
        <div ref={formRef} className={styles.inlineForm}>
          <div className={styles.inlineFormHeader}>
            <p className={styles.inlineFormEyebrow}>Ready to get started?</p>
            <h3 className={styles.inlineFormTitle}>
              {service.title} — Request a Quote
            </h3>
            <p className={styles.inlineFormSub}>
              Complete the form and The Web House will review your requirements
              and prepare a customised quotation.
            </p>
          </div>
          <ServiceRequestForm key={service.slug} service={service} />
          <p className={styles.inlineFormNote}>
            After submitting, The Web House will review your requirements and
            follow up directly to prepare a customised quotation based on your
            selected service, project scope and timeline.
          </p>
        </div>
      )}

    </div>
  )
}

/* ─── Bottom CTA ─── */
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
          Have a Question?
        </h2>
        <p className={styles.ctaSub}>
          Not sure which service fits your need? Send a general enquiry and our
          team will help guide you in the right direction.
        </p>
        <div className={styles.ctaBtns}>
          <Link to="/contact" className={styles.ctaBtn}>Get in Touch</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
export default function Services() {
  const { hash } = useLocation()
  const [openSlug, setOpenSlug] = useState(null)

  // Scroll to anchored service when navigating from homepage cards
  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      const t = setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 200)
      return () => clearTimeout(t)
    }
  }, [hash])

  function handleToggleForm(slug) {
    setOpenSlug(prev => (prev === slug ? null : slug))
  }

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
            <ServicePanel
              key={service.id}
              service={service}
              index={i}
              isFormOpen={openSlug === service.slug}
              onToggleForm={handleToggleForm}
            />
          ))}
        </div>
      </section>

      <ServicesCta />

    </div>
  )
}
