import { Link } from 'react-router-dom'
import { company } from '../data/company'
import { useReveal } from '../hooks/useReveal'
import GeneralContactForm from '../components/forms/GeneralContactForm'
import styles from './Contact.module.css'

/* ─── Service direction panel ─── */
function ServicePanel() {
  return (
    <div className={styles.servicePanel}>
      <div className={styles.servicePanelTop}>
        <p className={styles.servicePanelEyebrow}>Already know what you need?</p>
        <h3 className={styles.servicePanelHeading}>
          Browse Our Services
        </h3>
        <p className={styles.servicePanelCopy}>
          Explore our services and use the service-specific request form so we can
          collect the right requirements for your project.
        </p>
      </div>
      <Link to="/services" className={styles.servicePanelBtn}>
        View Services →
      </Link>
    </div>
  )
}

/* ─── Company info panel ─── */
function InfoPanel() {
  return (
    <aside className={styles.info}>
      <div className={styles.infoHead}>
        <p className={styles.infoHeadLabel}>Agency</p>
        <h2 className={styles.infoHeadTitle}>{company.name}</h2>
      </div>
      <div className={styles.infoBody}>

        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Based in</span>
          <span className={styles.infoValue}>{company.location}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Offices</span>
          <span className={styles.infoValue}>{company.locations.join(' · ')}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Serving</span>
          <span className={styles.infoValue}>{company.markets.join(' & ')}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Founded</span>
          <span className={styles.infoValue}>{company.founded}</span>
        </div>

        <p className={styles.infoNote}>
          Submit your enquiry using the form and our team will follow up
          directly via your preferred contact method.
        </p>

      </div>
    </aside>
  )
}

/* ─────────────────────────────────────────
   Contact Page
───────────────────────────────────────── */
export default function Contact() {
  const [formRef, formVisible] = useReveal(0.04)

  return (
    <div className={styles.page}>

      {/* ─── Hero ─── */}
      <header className={styles.hero}>
        <div className={styles.heroWrap}>
          <p className={styles.heroEyebrow}>Get In Touch</p>
          <h1 className={styles.heroHeading}>
            Start the<br />
            <span className={styles.accent}>Conversation</span>
          </h1>
          <p className={styles.heroCopy}>
            Not sure where to begin? Send us a general enquiry and The Web House
            team will help guide you toward the right creative, digital or
            technology solution.
          </p>
        </div>
      </header>

      {/* ─── Form + Sidebar ─── */}
      <section
        ref={formRef}
        className={`${styles.formSection} ${formVisible ? styles.sectionVisible : ''}`}
      >
        <div className={styles.formInner}>

          {/* Left — general enquiry form */}
          <div className={styles.formCol}>
            <p className={styles.formColLabel}>General Enquiry</p>
            <GeneralContactForm />
          </div>

          {/* Right — direction + info sidebar */}
          <div className={styles.sidebar}>
            <ServicePanel />
            <InfoPanel />
          </div>

        </div>
      </section>

    </div>
  )
}
