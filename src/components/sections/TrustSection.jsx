import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import styles from './TrustSection.module.css'

const TRUST_POINTS = [
  {
    title: 'Founded in 2016',
    copy: 'Built from humble beginnings and shaped by years of creative, digital and technology work.',
  },
  {
    title: 'Started from a garage',
    copy: 'The Web House grew from a simple starting point into a full-service creative digital and technology agency.',
  },
  {
    title: '300+ clients served',
    copy: 'Trusted by businesses across different industries for branding, websites, systems, printing, marketing and IT support.',
  },
  {
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
            Built on Experience,<br />Creativity and <span className={styles.headingWhite}>Technology</span>
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

          {/* Trust points — no icons */}
          <div className={styles.pointsCol}>
            {TRUST_POINTS.map(({ title, copy }, i) => (
              <div
                key={title}
                className={`${styles.point} ${visible ? styles.pointVisible : ''}`}
                style={{ '--i': i }}
              >
                <h3 className={styles.pointTitle}>{title}</h3>
                <p className={styles.pointCopy}>{copy}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
