import { useState } from 'react'

import { useDocumentTitle } from '@/page/UseDocumentTitle/hooks'
import theme from '@/theme.module.css'
import styles from './UseDocumentTitle.module.css'

export default function UseDocumentTitle() {
  const [count, setCount] = useState(0)

  useDocumentTitle(`Clicked ${count} times.`)

  const handleClick = () => setCount(count + 1)

  return (
    <section className={styles.section}>
      <h1>useDocumentTitle</h1>
      <button className={theme.primary} onClick={handleClick}>
        Increment Count: {count}
      </button>
    </section>
  )
}
