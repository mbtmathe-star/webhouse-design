import { useState } from 'react'
import { services } from '../data/services'
import { company } from '../data/company'
import { useReveal } from '../hooks/useReveal'
import styles from './Contact.module.css'

const TIMELINES = [
  { value: 'asap',      label: 'As soon as possible' },
  { value: '1month',    label: 'Within 1 month' },
  { value: '1-3months', label: '1–3 months' },
  { value: '3-6months', label: '3–6 months' },
  { value: 'flexible',  label: 'No fixed deadline' },
]

const INIT = {
  name: '', business: '', email: '', phone: '',
  service: '', timeline: '', details: '',
}

/* ─── Reusable text input field ─── */
function Field({ label, id, name, type, value, onChange, placeholder, error, required }) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span className={styles.req} aria-hidden="true"> *</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        aria-describedby={error ? `${id}-err` : undefined}
        aria-invalid={error ? 'true' : undefined}
      />
      {error && (
        <span id={`${id}-err`} className={styles.errorMsg} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

/* ─── Submitted / not-connected state ─── */
function SuccessCard({ name, onReset }) {
  const first = name ? name.trim().split(' ')[0] : ''
  return (
    <div className={styles.successCard}>
      <div className={styles.successIcon} aria-hidden="true">✓</div>
      <h3 className={styles.successHeading}>Request Captured</h3>
      <p className={styles.successMsg}>
        Thank you{first ? `, ${first}` : ''}. Your project request has been recorded
        and is ready for review.
      </p>
      <div className={styles.pendingNote}>
        <strong>Form connection pending</strong>
        <p>
          This form has not yet been connected to a receiving email address or
          backend endpoint. To activate submission delivery, an approved email or
          form service must be configured.
        </p>
      </div>
      <button className={styles.resetBtn} onClick={onReset}>
        Submit Another Request
      </button>
    </div>
  )
}

/* ─── Company info sidebar ─── */
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
          To discuss your project, please complete the request form. We review all
          submissions and follow up with a tailored quotation.
        </p>
      </div>
    </aside>
  )
}

/* ─── Main page ─── */
export default function Contact() {
  const [form, setForm] = useState(INIT)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [formRef, formVisible] = useReveal(0.04)

  function handleChange({ target: { name, value } }) {
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => { const n = { ...prev }; delete n[name]; return n })
    }
  }

  function validate() {
    const e = {}
    if (!form.name.trim())
      e.name = 'Full name is required'
    if (!form.email.trim())
      e.email = 'Email address is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email address'
    if (!form.service)
      e.service = 'Please select a service'
    if (!form.details.trim())
      e.details = 'Please describe your project requirements'
    return e
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) setSubmitted(true)
  }

  function reset() {
    setForm(INIT)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <div className={styles.page}>

      {/* ─── Hero ─── */}
      <header className={styles.hero}>
        <div className={styles.heroWrap}>
          <p className={styles.heroEyebrow}>Request a Quote</p>
          <h1 className={styles.heroHeading}>
            Start Your<br />
            <span className={styles.accent}>Project</span>
          </h1>
          <p className={styles.heroCopy}>
            Submit your requirements and The Web House team will review your
            project before preparing a customised quotation.
          </p>
        </div>
      </header>

      {/* ─── Form + Info ─── */}
      <section
        ref={formRef}
        className={`${styles.formSection} ${formVisible ? styles.sectionVisible : ''}`}
      >
        <div className={styles.formInner}>

          {/* Left — form or success card */}
          {submitted ? (
            <SuccessCard name={form.name} onReset={reset} />
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>

              <div className={styles.row}>
                <Field
                  label="Full Name" id="name" name="name" type="text"
                  value={form.name} onChange={handleChange}
                  placeholder="Jane Smith"
                  error={errors.name} required
                />
                <Field
                  label="Business Name" id="business" name="business" type="text"
                  value={form.business} onChange={handleChange}
                  placeholder="Your company (optional)"
                />
              </div>

              <div className={styles.row}>
                <Field
                  label="Email Address" id="email" name="email" type="email"
                  value={form.email} onChange={handleChange}
                  placeholder="hello@yourbusiness.com"
                  error={errors.email} required
                />
                <Field
                  label="Phone Number" id="phone" name="phone" type="tel"
                  value={form.phone} onChange={handleChange}
                  placeholder="+27 (optional)"
                />
              </div>

              <div className={styles.row}>

                {/* Service select */}
                <div className={styles.field}>
                  <label htmlFor="service" className={styles.label}>
                    Service Needed
                    <span className={styles.req} aria-hidden="true"> *</span>
                  </label>
                  <div className={styles.selectWrap}>
                    <select
                      id="service" name="service"
                      value={form.service} onChange={handleChange}
                      required
                      className={`${styles.select} ${errors.service ? styles.inputError : ''}`}
                      aria-describedby={errors.service ? 'service-err' : undefined}
                      aria-invalid={errors.service ? 'true' : undefined}
                    >
                      <option value="" disabled>Select a service…</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  {errors.service && (
                    <span id="service-err" className={styles.errorMsg} role="alert">
                      {errors.service}
                    </span>
                  )}
                </div>

                {/* Timeline select */}
                <div className={styles.field}>
                  <label htmlFor="timeline" className={styles.label}>Project Timeline</label>
                  <div className={styles.selectWrap}>
                    <select
                      id="timeline" name="timeline"
                      value={form.timeline} onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="" disabled>Select a timeline…</option>
                      {TIMELINES.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Details textarea */}
              <div className={styles.field}>
                <label htmlFor="details" className={styles.label}>
                  Project Details / Requirements
                  <span className={styles.req} aria-hidden="true"> *</span>
                </label>
                <textarea
                  id="details" name="details"
                  value={form.details} onChange={handleChange}
                  rows={6}
                  placeholder="Tell us about your project — what you need, your goals, any reference sites or materials…"
                  required
                  className={`${styles.textarea} ${errors.details ? styles.inputError : ''}`}
                  aria-describedby={errors.details ? 'details-err' : undefined}
                  aria-invalid={errors.details ? 'true' : undefined}
                />
                {errors.details && (
                  <span id="details-err" className={styles.errorMsg} role="alert">
                    {errors.details}
                  </span>
                )}
              </div>

              <div className={styles.formFooter}>
                <button type="submit" className={styles.submitBtn}>
                  Submit Request
                </button>
                <p className={styles.formNote}>Fields marked * are required</p>
              </div>

            </form>
          )}

          {/* Right — info sidebar */}
          <InfoPanel />

        </div>
      </section>

    </div>
  )
}
