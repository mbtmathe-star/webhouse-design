import { useReveal } from '../../hooks/useReveal'
import styles from './ProcessSection.module.css'

const STEPS = [
  {
    num: 1,
    title: 'Discover',
    desc: 'We learn about your business, goals and project requirements.',
  },
  {
    num: 2,
    title: 'Strategy',
    desc: 'We define the best creative, digital or technology direction.',
  },
  {
    num: 3,
    title: 'Design & Build',
    desc: 'We create the visuals, platform, system or support solution required.',
  },
  {
    num: 4,
    title: 'Review & Refine',
    desc: 'We test, review and improve everything before final delivery.',
  },
  {
    num: 5,
    title: 'Deliver & Support',
    desc: 'We deliver the work and provide support where needed.',
  },
]

export default function ProcessSection() {
  const [ref, visible] = useReveal(0.06)

  return (
    <section
      ref={ref}
      className={`${styles.section} ${visible ? styles.visible : ''}`}
      id="process"
    >
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>How We Work</span>
          <h2 className={styles.heading}>Our Process</h2>
          <p className={styles.intro}>
            A clear, guided approach from first conversation to final delivery.
          </p>
        </div>

        {/* Horizontal stepper */}
        <div className={styles.stepper}>
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`${styles.step} ${visible ? styles.stepVisible : ''}`}
              style={{ '--i': i }}
            >
              {/* Circle marker */}
              <div className={styles.markerWrap}>
                <div className={styles.marker}>
                  <span className={styles.markerNum}>{step.num}</span>
                </div>
              </div>

              {/* Step text */}
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
