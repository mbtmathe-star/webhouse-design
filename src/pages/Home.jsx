import { Link } from 'react-router-dom'
import { company } from '../data/company'
import { services } from '../data/services'
import ServiceCard from '../components/cards/ServiceCard'
import Button from '../components/ui/Button'
import styles from './Home.module.css'

export default function Home() {
  const featuredServices = services.slice(0, 4)

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            Helping Brands<br />
            Look <span className={styles.heroAccent}>Professional</span><br />
            Work Smarter
          </h1>
          <p className={styles.heroSubline}>{company.hero.subline}</p>
          <div className={styles.heroCta}>
            <Button as={Link} to="/services" size="lg">
              Explore Services
            </Button>
            <Button as={Link} to="/contact" variant="outline" size="lg">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* ── Services preview ── */}
      <section className={styles.servicesSection}>
        <div className={styles.splitTitle}>
          <h2>What We<br />Offer</h2>
          <p className={styles.splitDesc}>
            From web development to motion graphics — we build, brand and grow businesses.
          </p>
        </div>
        <div className={styles.grid}>
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
        <div className={styles.gridCta}>
          <Button as={Link} to="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className={styles.ctaBanner}>
        <h2 className={styles.ctaHeading}>Let's Work Together</h2>
        <p className={styles.ctaSub}>Ready to take your business to the next level?</p>
        <Button as={Link} to="/contact" size="lg">
          Request a Quote
        </Button>
      </section>
    </>
  )
}
