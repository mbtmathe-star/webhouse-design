import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import styles from './TrustSection.module.css'

/* ─── Inline SVG icons — lightweight stroke-based ─── */
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
)

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const TRUST_POINTS = [
  {
    Icon: IconCalendar,
    title: 'Founded in 2016',
    copy: 'Built from humble beginnings and shaped by years of creative, digital and technology work.',
  },
  {
    Icon: IconHome,
    title: 'Started from a garage',
    copy: 'The Web House grew from a simple starting point into a full-service creative digital and technology agency.',
  },
  {
    Icon: IconUsers,
    title: '300+ clients served',
    copy: 'Trusted by businesses across different industries for branding, websites, systems, printing, marketing and IT support.',
  },
  {
    Icon: IconPin,
    title: 'Serving South Africa and Namibia',
    copy: 'Based in Gauteng, with presence in Hartbeespoort and Lanseria, serving clients across South Africa and Namibia.',
  },
]

export default function TrustSection() {
  const [ref, visible] = useReveal(0.06)
  const [imgError, setImgError] = useState(false)

  return (
    <section
      ref={ref}
      className={`${styles.section} ${visible ? styles.visible : ''}`}
    >
      <div className={styles.inner}>

        {/* ─── Header ─── */}
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Built on Experience,<br />Creativity and Technology
          </h2>
          <p className={styles.sub}>
            From humble beginnings in a garage to serving businesses across South Africa
            and Namibia, The Web House brings creativity, strategy and technology together
            to help businesses look professional and work smarter.
          </p>
        </div>

        {/* ─── Body: image + points ─── */}
        <div className={styles.body}>

          {/* Image */}
          <div className={styles.imageCol}>
            {!imgError ? (
              <img
                src="/images/trust/report-chart-clipboard.jpg"
                alt="The Web House — creative work and technology in action"
                className={styles.img}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className={styles.imgFallback} aria-hidden="true" />
            )}
            <div className={styles.imgSheen} aria-hidden="true" />
          </div>

          {/* Trust points */}
          <div className={styles.pointsCol}>
            {TRUST_POINTS.map(({ Icon, title, copy }, i) => (
              <div
                key={title}
                className={`${styles.point} ${visible ? styles.pointVisible : ''}`}
                style={{ '--i': i }}
              >
                <div className={styles.iconTile}>
                  <Icon />
                </div>
                <div className={styles.pointBody}>
                  <h3 className={styles.pointTitle}>{title}</h3>
                  <p className={styles.pointCopy}>{copy}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
