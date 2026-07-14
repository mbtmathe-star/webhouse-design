import { useState } from 'react'
import styles from './GeneralContactForm.module.css'

const CONTACT_METHODS = ['WhatsApp', 'Email', 'Phone call', 'No preference']

const INIT = {
  fullName: '',
  company: '',
  email: '',
  mobile: '',
  contactMethod: '',
  helpWith: '',
  message: '',
}

/* ─── Single text/email/tel input ─── */
function Field({ label, name, type, value, onChange, placeholder, error, required }) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.req} aria-hidden="true"> *</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        aria-describedby={error ? `${name}-err` : undefined}
        aria-invalid={error ? 'true' : undefined}
      />
      {error && (
        <span id={`${name}-err`} className={styles.errorMsg} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

/* ─── Success / submitted state ─── */
function SuccessCard({ onReset }) {
  return (
    <div className={styles.successCard}>
      <div className={styles.successIcon} aria-hidden="true">✓</div>
      <h3 className={styles.successHeading}>Enquiry Received</h3>
      <p className={styles.successMsg}>
        Thank you for reaching out. The Web House team will review your message
        and follow up via your preferred contact method shortly.
      </p>
      <button className={styles.resetBtn} onClick={onReset}>
        Send Another Enquiry
      </button>
    </div>
  )
}

/* ─────────────────────────────────────────
   General Contact Form
───────────────────────────────────────── */
export default function GeneralContactForm() {
  const [form, setForm] = useState(INIT)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange({ target: { name, value } }) {
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => { const n = { ...prev }; delete n[name]; return n })
    }
  }

  function validate() {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required'
    if (!form.email.trim()) e.email = 'Email address is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email address'
    if (!form.mobile.trim()) e.mobile = 'Mobile number is required'
    if (!form.message.trim()) e.message = 'Please add a message or enquiry detail'
    return e
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setLoading(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'e7992dd8-bd93-42b6-811a-c2aaedf2ee7b',
          subject: 'General Enquiry — The Web House',
          from_name: form.fullName,
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setErrors({ _submit: 'Something went wrong. Please try again or email info@thewebhouse.africa.' })
      }
    } catch {
      setErrors({ _submit: 'Could not send. Please try again or email info@thewebhouse.africa.' })
    } finally {
      setLoading(false)
    }
  }

  function reset() {
    setForm(INIT)
    setErrors({})
    setSubmitted(false)
  }

  if (submitted) return <SuccessCard onReset={reset} />

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>

      <div className={styles.row}>
        <Field
          label="Full Name" name="fullName" type="text"
          value={form.fullName} onChange={handleChange}
          placeholder="Jane Smith"
          error={errors.fullName} required
        />
        <Field
          label="Business Name" name="company" type="text"
          value={form.company} onChange={handleChange}
          placeholder="Your company (optional)"
        />
      </div>

      <div className={styles.row}>
        <Field
          label="Email Address" name="email" type="email"
          value={form.email} onChange={handleChange}
          placeholder="hello@yourbusiness.com"
          error={errors.email} required
        />
        <Field
          label="Mobile Number" name="mobile" type="tel"
          value={form.mobile} onChange={handleChange}
          placeholder="+27 82 000 0000"
          error={errors.mobile} required
        />
      </div>

      <div className={styles.row}>

        {/* Preferred contact method — select */}
        <div className={styles.field}>
          <label htmlFor="contactMethod" className={styles.label}>
            Preferred Contact Method
          </label>
          <div className={styles.selectWrap}>
            <select
              id="contactMethod"
              name="contactMethod"
              value={form.contactMethod}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="" disabled>Select an option…</option>
              {CONTACT_METHODS.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        <Field
          label="What do you need help with?"
          name="helpWith" type="text"
          value={form.helpWith} onChange={handleChange}
          placeholder="e.g. Build a website, create a logo, IT support, not sure yet"
        />

      </div>

      {/* Message textarea */}
      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message / Enquiry Details
          <span className={styles.req} aria-hidden="true"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          placeholder="Tell us about your project, challenge or question. The more detail you share, the better we can help."
          required
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          aria-describedby={errors.message ? 'message-err' : undefined}
          aria-invalid={errors.message ? 'true' : undefined}
        />
        {errors.message && (
          <span id="message-err" className={styles.errorMsg} role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <div className={styles.formFooter}>
        {errors._submit && (
          <p className={styles.errorMsg} role="alert" style={{ marginBottom: '12px' }}>
            {errors._submit}
          </p>
        )}
        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? 'Sending…' : 'Send Enquiry'}
        </button>
        <p className={styles.formNote}>Fields marked * are required</p>
      </div>

    </form>
  )
}
