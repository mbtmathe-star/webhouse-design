import { services } from '../data/services'
import ServiceCard from '../components/cards/ServiceCard'
import Badge from '../components/ui/Badge'
import styles from './Services.module.css'

export default function Services() {
  return (
    <div className={styles.page}>
      <div className={styles.headline}>
        <Badge>What We Offer</Badge>
        <div className={styles.splitTitle}>
          <h2>Our Services</h2>
          <p className={styles.sub}>
            Comprehensive digital, design and technology solutions for growing businesses.
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  )
}
