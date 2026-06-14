import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import styles from './ClientJourneyPreview.module.css'

const JOURNEY = [
  {
    num: '01',
    title: 'Submit Request',
    desc: 'Share your business details, selected service and project requirements.',
  },
  {
    num: '02',
    title: 'Requirements Reviewed',
    desc: 'The Web House reviews your request and clarifies what is needed.',
  },
  {
    num: '03',
    title: 'Custom Quote Prepared',
    desc: 'A quotation or invoice is prepared based on scope, timeline and selected service.',
  },
  {
    num: '04',
    title: 'Offline Payment',
    desc: 'Payment is handled offline after the quotation has been reviewed.',
  },
  {
    num: '05',
    title: 'Project In Progress',
    desc: 'The work moves into planning, design, development or production.',
  },
  {
    num: '06',
    title: 'Review & Delivery',
    desc: 'The project is reviewed, refined and delivered.',
  },
  {
    num: '07',
    title: 'Future Client Portal',
    desc: 'A future production phase can add a client portal for project tracking and communication.',
    future: true,
  },
]

export default function ClientJourneyPreview() {
  const [ref, visible] = useReveal(0.04)

  return (
    <section
      ref={ref}
      className={`${styles.section} ${visible ? styles.visible : ''}`}
    >
      <div className={styles.inner}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>Client Journey</span>
          <h2 className={styles.heading}>Your Project Journey</h2>
          <p className={styles.intro}>
            From the first request to final delivery, The Web House keeps the process
            clear, guided and focused on the solution your business needs.
          </p>
        </div>

        <div className={styles.track}>
          {JOURNEY.map((item, i) => (
            <div
              key={item.num}
              className={`${styles.card} ${item.future ? styles.cardFuture : ''} ${visible ? styles.cardVisible : ''}`}
              style={{ '--i': i }}
            >
              <span className={styles.cardNum}>{item.num}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              {item.future && (
                <span className={styles.futureBadge}>Coming Soon</span>
              )}
            </div>
          ))}
        </div>

        <p className={styles.frontendNote}>
          This is a visual frontend-only journey preview. It does not include
          login, dashboard functionality, file storage or live project tracking.
        </p>

        <div className={styles.cta}>
          <Link to="/contact" className={styles.ctaBtn}>Start a Project</Link>
        </div>

      </div>
    </section>
  )
}
