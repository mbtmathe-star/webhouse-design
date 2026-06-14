import { useState, useRef } from 'react'
import { serviceQuestions, TIMELINES, CONTACT_METHODS, FILE_ACCEPT } from '../../data/serviceForms'
import styles from './ServiceRequestForm.module.css'

/* ─── Build initial form state from service question set ─── */
function buildInit(questions) {
  const shared = {
    fullName: '', company: '', email: '', mobile: '', whatsapp: '',
    location: '', contactMethod: '', existingLinks: '', notes: '',
  }
  const specific = questions.reduce((acc, q) => ({ ...acc, [q.name]: '' }), {})
  return { ...shared, ...specific }
}

/* ─── Single field renderer ─── */
function Field({ question, value, onChange, error }) {
  const { name, label, type, options, placeholder, required } = question

  const baseClass = type === 'textarea' ? styles.textarea
    : type === 'select' ? styles.select
    : styles.input

  const cls = `${baseClass} ${error ? styles.inputError : ''}`

  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.req} aria-hidden="true"> *</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder || ''}
          rows={4}
          required={required}
          className={cls}
          aria-describedby={error ? `${name}-err` : undefined}
          aria-invalid={error ? 'true' : undefined}
        />
      ) : type === 'select' ? (
        <div className={styles.selectWrap}>
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className={cls}
            aria-describedby={error ? `${name}-err` : undefined}
            aria-invalid={error ? 'true' : undefined}
          >
            <option value="" disabled>Select an option…</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder || ''}
          required={required}
          className={cls}
          aria-describedby={error ? `${name}-err` : undefined}
          aria-invalid={error ? 'true' : undefined}
        />
      )}

      {error && (
        <span id={`${name}-err`} className={styles.errorMsg} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

/* ─── Success state ─── */
function SuccessCard({ onReset }) {
  return (
    <div className={styles.successCard}>
      <div className={styles.successIcon} aria-hidden="true">✓</div>
      <h3 className={styles.successHeading}>Request Submitted</h3>
      <p className={styles.successMsg}>
        Thank you for submitting your request. Our team will review your requirements
        and prepare a customised quotation or invoice. We will contact you via
        WhatsApp or email shortly.
      </p>
      <div className={styles.pendingNote}>
        <strong>Frontend demo only</strong>
        <p>
          This is a frontend-only request flow. The next production phase can connect
          request saving, email notifications, WhatsApp alerts, file storage and admin
          request management.
        </p>
      </div>
      <button className={styles.resetBtn} onClick={onReset}>
        Submit Another Request
      </button>
    </div>
  )
}

/* ─── Step header ─── */
function StepHeader({ num, title, sub }) {
  return (
    <div className={styles.stepHeader}>
      <span className={styles.stepNum}>{num}</span>
      <div>
        <h3 className={styles.stepTitle}>{title}</h3>
        <p className={styles.stepSub}>{sub}</p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Main component
───────────────────────────────────────── */
export default function ServiceRequestForm({ service }) {
  const questions = serviceQuestions[service.slug] || []
  const [form, setForm] = useState(() => buildInit(questions))
  const [errors, setErrors] = useState({})
  const [files, setFiles] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const fileRef = useRef(null)

  function handleChange({ target: { name, value } }) {
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => { const n = { ...prev }; delete n[name]; return n })
    }
  }

  function handleFiles(e) {
    setFiles(Array.from(e.target.files))
  }

  function validate() {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required'
    if (!form.email.trim()) e.email = 'Email address is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email address'
    if (!form.mobile.trim()) e.mobile = 'Mobile number is required'
    return e
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) setSubmitted(true)
  }

  function reset() {
    setForm(buildInit(questions))
    setErrors({})
    setFiles([])
    setSubmitted(false)
  }

  if (submitted) return <SuccessCard onReset={reset} />

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>

      {/* ─── Step 01: Your Details ─── */}
      <div className={styles.step}>
        <StepHeader
          num="01"
          title="Your Details"
          sub="Required fields help us understand who to contact and what kind of project you need."
        />
        <div className={styles.stepBody}>

          <div className={styles.row}>
            <Field
              question={{ name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Jane Smith' }}
              value={form.fullName}
              onChange={handleChange}
              error={errors.fullName}
            />
            <Field
              question={{ name: 'company', label: 'Company Name', type: 'text', required: false, placeholder: 'Your business (optional)' }}
              value={form.company}
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <Field
              question={{ name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'hello@yourbusiness.com' }}
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Field
              question={{ name: 'mobile', label: 'Mobile Number', type: 'tel', required: true, placeholder: '+27 82 000 0000' }}
              value={form.mobile}
              onChange={handleChange}
              error={errors.mobile}
            />
          </div>

          <div className={styles.row}>
            <Field
              question={{ name: 'whatsapp', label: 'WhatsApp Number', type: 'tel', required: false, placeholder: 'Same as mobile if applicable' }}
              value={form.whatsapp}
              onChange={handleChange}
            />
            <Field
              question={{ name: 'location', label: 'Location / City', type: 'text', required: false, placeholder: 'e.g. Johannesburg, Pretoria' }}
              value={form.location}
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <Field
              question={{ name: 'contactMethod', label: 'Preferred Contact Method', type: 'select', required: false, options: CONTACT_METHODS }}
              value={form.contactMethod}
              onChange={handleChange}
            />
            <Field
              question={{ name: 'existingLinks', label: 'Existing Website or Social Media', type: 'text', required: false, placeholder: 'e.g. yoursite.co.za or @yourbrand' }}
              value={form.existingLinks}
              onChange={handleChange}
            />
          </div>

        </div>
      </div>

      {/* ─── Step 02: Project Requirements ─── */}
      {questions.length > 0 && (
        <div className={styles.step}>
          <StepHeader
            num="02"
            title="Project Requirements"
            sub="Help us understand exactly what you need."
          />
          <div className={styles.stepBody}>
            {questions.map((q) => (
              <Field
                key={q.name}
                question={q}
                value={form[q.name] || ''}
                onChange={handleChange}
                error={errors[q.name]}
              />
            ))}
          </div>
        </div>
      )}

      {/* ─── Step 03: Supporting Files ─── */}
      <div className={styles.step}>
        <StepHeader
          num="03"
          title="Supporting Files"
          sub="You can attach logos, brand guidelines, company profiles, images, briefs, website content, existing designs or other supporting project files."
        />
        <div className={styles.stepBody}>
          <div
            className={styles.fileZone}
            onClick={() => fileRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && fileRef.current?.click()}
            aria-label="Select files to upload"
          >
            <div className={styles.fileIcon} aria-hidden="true">↑</div>
            <p className={styles.fileLabel}>Click to select files</p>
            <p className={styles.fileHint}>
              Logos · Brand guides · Images · Designs · Briefs · PDFs
            </p>
            <input
              ref={fileRef}
              type="file"
              multiple
              accept={FILE_ACCEPT}
              onChange={handleFiles}
              className={styles.fileInput}
              aria-label="Upload supporting files"
            />
          </div>

          {files.length > 0 && (
            <ul className={styles.fileList} aria-label="Selected files">
              {files.map((f, i) => (
                <li key={i} className={styles.fileItem}>
                  <span className={styles.fileDot} aria-hidden="true" />
                  <span className={styles.fileName}>{f.name}</span>
                  <span className={styles.fileSize}>
                    {(f.size / 1024).toFixed(0)} KB
                  </span>
                </li>
              ))}
            </ul>
          )}

          <p className={styles.fileNote}>
            File upload storage is not connected in this frontend version.
          </p>
        </div>
      </div>

      {/* ─── Step 04: Submit ─── */}
      <div className={styles.step}>
        <StepHeader
          num="04"
          title="Submit Request"
          sub="Add any final notes and submit your request."
        />
        <div className={styles.stepBody}>
          <Field
            question={{
              name: 'notes',
              label: 'Additional Notes',
              type: 'textarea',
              required: false,
              placeholder: 'Any other details, questions or information we should know…',
            }}
            value={form.notes}
            onChange={handleChange}
          />
          <div className={styles.submitRow}>
            <button type="submit" className={styles.submitBtn}>
              Submit Request
            </button>
            <p className={styles.submitNote}>Fields marked * are required</p>
          </div>
        </div>
      </div>

    </form>
  )
}
