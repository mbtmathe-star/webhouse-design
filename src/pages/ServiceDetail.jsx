import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { services } from '../data/services'
import { useReveal } from '../hooks/useReveal'
import ServiceRequestForm from '../components/forms/ServiceRequestForm'
import styles from './ServiceDetail.module.css'

const HOW_IT_WORKS = [
  'Submit your requirements',
  'The Web House reviews your request',
  'A customised quotation or invoice is prepared',
  'Payment is handled offline',
  'The project moves into planning and delivery',
]

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
  const [processRef, processVisible] = useReveal(0.06)
  const [formRef, formVisible] = useReveal(0.04)

  if (!service) return <NotFound />

  return (
    <div className={styles.page}>

      {/* ─── Hero ─── */}
      <header className={styles.hero}>
        <div className={styles.heroWrap}>
          <Link to="/services" className={styles.breadcrumb}>← Back to Services</Link>
          <div className={styles.heroGrid}>

            <div className={styles.heroText}>
              <div className={styles.heroNumber}>{service.number}</div>
              <h1 className={styles.heroTitle}>{service.title}</h1>
              <p className={styles.heroIntro}>{service.shortDescription}</p>
              <a href="#request-form" className={styles.heroScrollBtn}>
                Request a Quote
              </a>
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

      {/* ─── Content: What can be included + What this helps with ─── */}
      <section
        ref={contentRef}
        className={`${styles.content} ${contentVisible ? styles.contentVisible : ''}`}
      >
        <div className={styles.contentInner}>

          <div className={styles.included}>
            <span className={styles.sectionLabel}>What Can Be Included</span>
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
            {service.helpsWithPoints ? (
              <ul className={styles.helpsList}>
                {service.helpsWithPoints.map((point, i) => (
                  <li key={i} className={styles.helpsItem}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.helpsCopy}>{service.pageIntro}</p>
            )}
          </div>

        </div>
      </section>

      {/* ─── How the request works ─── */}
      <section
        ref={processRef}
        className={`${styles.processSection} ${processVisible ? styles.processVisible : ''}`}
      >
        <div className={styles.processWrap}>
          <span className={styles.sectionLabel}>How It Works</span>
          <h2 className={styles.processHeading}>How the Request Works</h2>
          <ol className={styles.processList}>
            {HOW_IT_WORKS.map((step, i) => (
              <li key={i} className={styles.processStep}>
                <span className={styles.processNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.processText}>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── Inline Request Form ─── */}
      <section
        id="request-form"
        ref={formRef}
        className={`${styles.formSection} ${formVisible ? styles.formVisible : ''}`}
      >
        <div className={styles.formWrap}>
          <div className={styles.formHeader}>
            <p className={styles.formEyebrow}>Ready to get started?</p>
            <h2 className={styles.formHeading}>Request a Quote</h2>
            <p className={styles.formSub}>
              Complete the form below so The Web House can understand your requirements
              and prepare the right quotation for your project.
            </p>
          </div>
          <ServiceRequestForm key={service.slug} service={service} />
          <div className={styles.afterSubmitNote}>
            <p>
              After you submit your request, The Web House will review your requirements
              and prepare a customised quotation or invoice based on the selected service,
              project scope and timeline. This frontend form is ready for connection in a
              future production phase and does not currently send data to a backend.
            </p>
          </div>
          <div className={styles.formFootNote}>
            <Link to="/services" className={styles.allServicesLink}>← Back to Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
