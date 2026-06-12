import styles from './Badge.module.css'

export default function Badge({ children, className = '' }) {
  const classes = [styles.badge, className].filter(Boolean).join(' ')
  return <span className={classes}>{children}</span>
}
