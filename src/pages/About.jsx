import Badge from '../components/ui/Badge'
import { company } from '../data/company'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.headline}>
        <Badge>{company.about.badge}</Badge>
        <h2 className={styles.heading}>{company.about.heading}</h2>
      </div>
      <p className={styles.copy}>{company.about.copy}</p>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>Since {company.founded}</span>
          <span className={styles.statLabel}>In business</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>8</span>
          <span className={styles.statLabel}>Services offered</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>{company.location}</span>
          <span className={styles.statLabel}>Based in</span>
        </div>
      </div>
    </div>
  )
}
