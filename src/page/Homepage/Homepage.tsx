import { PATH } from '@/constants/path'
import { Link } from 'react-router-dom'

import styles from './Homepage.module.css'

export default function Homepage() {
  const USE_HOOKS = Object.keys(PATH).slice(1)

  return (
    <main className={`${styles.main}`}>
      <h1>usehooks</h1>

      <section>
        {USE_HOOKS.map((hook) => (
          <h2 key={hook}>
            <Link to={PATH[hook]}>{hook}</Link>
          </h2>
        ))}
      </section>
    </main>
  )
}
