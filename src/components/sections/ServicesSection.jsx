import { services } from '../../data/services'
import ServiceCard from '../cards/ServiceCard'
import styles from './ServicesSection.module.css'

export default function ServicesSection() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.inner}>

        <div className={styles.splitTitle}>
          <h2>What We<br />Offer</h2>
          <p>
            We provide creative, digital and technology solutions designed to help
            businesses grow. Pricing is not displayed publicly because every quotation
            is tailored to the client&apos;s requirements, timeline and project scope.
          </p>
          <h2 className={styles.right}>For<br />Business</h2>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

      </div>
    </section>
  )
}
