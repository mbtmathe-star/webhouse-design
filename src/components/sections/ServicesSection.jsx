import { services } from '../../data/services'
import { useReveal } from '../../hooks/useReveal'
import ServiceCard from '../cards/ServiceCard'
import styles from './ServicesSection.module.css'

export default function ServicesSection() {
  const [ref, visible] = useReveal(0.06)

  return (
    <section
      ref={ref}
      className={`${styles.services} ${visible ? styles.visible : ''}`}
      id="services"
    >
      <div className={styles.inner}>

        <div className={styles.splitTitle}>
          <h2>What We<br />Offer</h2>
          <p>
            From brand identity and websites to software, printing, marketing and IT
            support, The Web House provides practical creative and technology solutions
            for businesses that want to improve how they look, work and connect with
            customers.
          </p>
          <h2 className={styles.right}>For<br />Business</h2>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              {...service}
              index={i}
              sectionVisible={visible}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
