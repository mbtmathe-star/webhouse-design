import { useReveal } from '../../hooks/useReveal'
import styles from './ProcessSection.module.css'

const STEPS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We understand your business, goals, challenges and project requirements.',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'We define the best creative, digital or technology direction for the project.',
  },
  {
    num: '03',
    title: 'Design & Build',
    desc: 'We create the visuals, platform, system or support solution required.',
  },
  {
    num: '04',
    title: 'Review & Refine',
    desc: 'We test, review and improve the work before final delivery.',
  },
  {
    num: '05',
    title: 'Deliver & Support',
    desc: 'We hand over the completed work and provide support where required.',
  },
]

export default function ProcessSection() {
  const [ref, visible] = useReveal(0.06)

  return (
    <section
      ref={ref}
      className={`${styles.section} ${visible ? styles.visible : ''}`}
      id="how-we-work"
    >
      <div className={styles.inner}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>Our Process</span>
          <h2 className={styles.heading}>How We Work</h2>
          <p className={styles.intro}>
            Every project starts with understanding your business, your goals and
            the solution you need. From there, The Web House guides the process
            from idea to delivery.
          </p>
        </div>

        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`${styles.step} ${visible ? styles.stepVisible : ''}`}
              style={{ '--i': i }}
            >
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepBody}>
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
