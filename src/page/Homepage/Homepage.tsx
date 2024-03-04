import { PATH } from '@/constants/path'
import { Link } from 'react-router-dom'

import styles from './Homepage.module.css'

export default function Homepage() {
  return (
    <main className={`${styles.main}`}>
      <h1>usehooks</h1>
      <section>
        <h2>
          <Link to={PATH.useDocumentTitle}>useDocumentTitle</Link>
        </h2>
        <h2>
          <Link to={PATH.useDefault}>useDefault</Link>
        </h2>
      </section>
    </main>
  )
}
