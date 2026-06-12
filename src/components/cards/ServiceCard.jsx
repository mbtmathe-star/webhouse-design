import styles from './ServiceCard.module.css'

export default function ServiceCard({ number, title, description, image }) {
  return (
    <article className={styles.card}>
      {image ? (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} loading="lazy" />
        </div>
      ) : (
        <div className={styles.imagePlaceholder} aria-hidden="true" />
      )}
      <div className={styles.body}>
        <span className={styles.number}>{number}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  )
}
