import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { company } from '../data/company'
import { services } from '../data/services'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={styles.headline}>
        <Badge>Get In Touch</Badge>
        <h2 className={styles.heading}>Request a Quote</h2>
        <p className={styles.sub}>Tell us about your project and we'll get back to you.</p>
      </div>

      <div className={styles.grid}>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="service">Service Interested In</label>
            <select id="service" name="service" defaultValue="">
              <option value="" disabled>Select a service…</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} placeholder="Tell us about your project…" />
          </div>
          <Button type="submit" size="lg">
            Send Message
          </Button>
          <p className={styles.note}>
            Form submission is not yet wired up. Add your preferred email or backend
            service in a later step.
          </p>
        </form>

        <aside className={styles.info}>
          <h3>Company Details</h3>
          <p><strong>Name:</strong> {company.name}</p>
          <p><strong>Location:</strong> {company.location}</p>
          <p><strong>Founded:</strong> {company.founded}</p>
          {company.email && <p><strong>Email:</strong> {company.email}</p>}
          {company.phone && <p><strong>Phone:</strong> {company.phone}</p>}
        </aside>
      </div>
    </div>
  )
}
