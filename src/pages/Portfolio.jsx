import Badge from '../components/ui/Badge'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <div className={styles.headline}>
        <Badge>Our Work</Badge>
        <h2 className={styles.heading}>
          Let's Work<br />Together
        </h2>
        <p className={styles.sub}>
          A showcase of projects we've completed for clients across industries.
        </p>
      </div>

      {/* Portfolio items go here — add project data to src/data/ when ready */}
      <div className={styles.placeholder}>
        <p>Portfolio items coming soon.</p>
        <Button as={Link} to="/contact" variant="outline" size="md">
          Start a Project
        </Button>
      </div>
    </div>
  )
}
