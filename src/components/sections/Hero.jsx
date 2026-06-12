import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="The Web House hero">
      <span className={styles.heroBefore} aria-hidden="true" />
      <span className={styles.arrow} aria-hidden="true" />

      <div className={styles.heroContent}>
        <span className={styles.label}>Digital solutions that deliver</span>
        <h1>
          Helping Brands<br />
          Look <span className={styles.accent}>Professional</span><br />
          Work Smarter
        </h1>
        <p className={styles.subline}>
          The Web House is a Gauteng-based creative digital and technology agency
          helping businesses build stronger brands, professional websites and reliable
          digital systems.
        </p>
        <div className={styles.blobOrbit} aria-hidden="true">
          <span className={`${styles.blob} ${styles.b1}`} />
          <span className={`${styles.blob} ${styles.b2}`} />
          <span className={`${styles.blob} ${styles.b3}`} />
          <span className={`${styles.blob} ${styles.b4}`} />
        </div>
      </div>
    </section>
  )
}
