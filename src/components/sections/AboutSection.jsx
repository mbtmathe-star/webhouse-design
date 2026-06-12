import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>

        {/*
          Float images — add files to enable:
            public/images/about/about-left.jpg
            public/images/about/about-right.jpg
          Hidden on mobile via CSS.
        */}
        <img
          className={`${styles.floatImg} ${styles.left}`}
          src="/images/about/about-left.jpg"
          alt=""
          aria-hidden="true"
        />
        <img
          className={`${styles.floatImg} ${styles.right}`}
          src="/images/about/about-right.jpg"
          alt=""
          aria-hidden="true"
        />

        <div className={styles.headline}>
          <span className={styles.badge}>Our Story</span>
          <h2>
            Creative Digital<br />
            And Technology<br />
            <span className={styles.grey}>Solutions</span>
          </h2>
        </div>

        <p className={styles.copy}>
          Founded in 2016 from humble beginnings in a garage, The Web House has grown into
          a trusted agency serving over 300 clients across South Africa and Namibia. We
          combine creativity, technology and strategy to help businesses communicate better,
          attract more customers and operate with confidence.
        </p>

      </div>
    </section>
  )
}
