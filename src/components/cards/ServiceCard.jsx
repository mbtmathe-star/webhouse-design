import { useState } from 'react'
import styles from './ServiceCard.module.css'

export default function ServiceCard({
  number,
  title,
  shortDescription,
  image,
  index = 0,
  sectionVisible = false,
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <article
      className={`${styles.card} ${sectionVisible ? styles.visible : ''}`}
      style={{ '--i': index }}
    >
      {image && !imgError ? (
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt=""
            loading="lazy"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <div className={styles.imagePlaceholder} aria-hidden="true" />
      )}
      <div className={styles.body}>
        <span className={styles.number}>{number}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{shortDescription}</p>
      </div>
    </article>
  )
}
