import { useReveal } from '../../hooks/useReveal'
import styles from './TrustSection.module.css'

const TRUST_POINTS = [
  { value: '2016', label: 'Founded', note: 'Started from humble beginnings in a garage' },
  { value: '300+', label: 'Clients Served', note: 'Across different industries' },
  { value: 'SA & Namibia', label: 'Markets', note: 'South Africa and Namibia' },
  { value: 'Gauteng', label: 'Based In', note: 'Hartbeespoort and Lanseria' },
  { value: '8 Services', label: 'Creative & Tech', note: 'Brand, web, software, printing, marketing and IT' },
  { value: 'Customised', label: 'Every Solution', note: 'Quotations prepared based on your requirements' },
]

export default function TrustSection() {
  const [ref, visible] = useReveal(0.06)

  return (
    <section
      ref={ref}
      className={`${styles.section} ${visible ? styles.visible : ''}`}
    >
      <div className={styles.inner}>

        <div className={styles.header}>
          <h2 className={styles.heading}>
            Built on Experience,<br />Creativity and Technology
          </h2>
        </div>

        <div className={styles.grid}>
          {TRUST_POINTS.map((point, i) => (
            <div
              key={point.label}
              className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
              style={{ '--i': i }}
            >
              <span className={styles.cardValue}>{point.value}</span>
              <span className={styles.cardLabel}>{point.label}</span>
              <p className={styles.cardNote}>{point.note}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
