import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './ServiceCard.module.css'

export default function ServiceCard({
  number,
  title,
  shortDescription,
  image,
  slug,
  index = 0,
  sectionVisible = false,
}) {
  const [imgError, setImgError] = useState(false)

  const cls = `${styles.card} ${sectionVisible ? styles.visible : ''}`
  const style = { '--i': index }

  const inner = (
    <>
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
        {slug && <span className={styles.viewMorePill}>View More →</span>}
      </div>
      {slug && <div className={styles.cardOverlay} aria-hidden="true" />}
    </>
  )

  return slug ? (
    <Link to={`/services/${slug}`} className={cls} style={style} aria-label={title}>
      {inner}
    </Link>
  ) : (
    <article className={cls} style={style}>
      {inner}
    </article>
  )
}
