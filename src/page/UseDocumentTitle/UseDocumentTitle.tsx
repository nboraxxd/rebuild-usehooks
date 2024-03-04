import { useState } from 'react'

import { useDocumentTitle } from '@/page/UseDocumentTitle/hooks'
import styles from './UseDocumentTitle.module.css'
import theme from './theme.module.css'

export default function UseDocumentTitle() {
  const [count, setCount] = useState(0)

  useDocumentTitle(`Clicked ${count} times.`)

  const handleClick = () => setCount(count + 1)

  return (
    <section className={`${theme} ${styles}`}>
      <h1>useDocumentTitle</h1>
      <button className={theme.primary} onClick={handleClick}>
        Increment Count: {count}
      </button>
    </section>
  )
}
