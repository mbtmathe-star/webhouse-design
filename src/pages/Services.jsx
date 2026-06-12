import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { useReveal } from '../hooks/useReveal'
import ServiceCard from '../components/cards/ServiceCard'
import styles from './Services.module.css'

function ServicesGrid() {
  const [ref, visible] = useReveal(0.04)
  return (
    <section
      ref={ref}
      className={`${styles.gridSection} ${visible ? styles.gridVisible : ''}`}
    >
      <div className={styles.gridInner}>
        <div className={styles.splitTitle}>
          <h2>What We<br />Offer</h2>
          <p>
            We provide creative, digital and technology solutions designed to help
            businesses grow. Every quotation is tailored to your requirements,
            timeline and project scope.
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

function ServicesCta() {
  const [ref, visible] = useReveal(0.1)
  return (
    <section
      ref={ref}
      className={`${styles.cta} ${visible ? styles.ctaVisible : ''}`}
    >
      <div className={styles.ctaInner}>
        <p className={styles.ctaEyebrow}>Ready to get started?</p>
        <h2 className={styles.ctaHeading}>
          Start Your<br />Project
        </h2>
        <p className={styles.ctaSub}>
          Tell us about your business and we&apos;ll prepare a tailored
          quotation for you.
        </p>
        <Link to="/contact" className={styles.ctaBtn}>Request a Quote</Link>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <div className={styles.page}>

      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>What We Do</span>
          <h1 className={styles.heroHeading}>
            Our<br />
            <span className={styles.accent}>Services</span>
          </h1>
          <p className={styles.heroCopy}>
            The Web House provides creative digital and technology solutions that help
            businesses build professional brands, reach their audience and operate
            with confidence.
          </p>
        </div>
      </header>

      <ServicesGrid />
      <ServicesCta />

    </div>
  )
}
