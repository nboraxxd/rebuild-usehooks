import { useDefault } from './hooks'
import theme from '@/theme.module.css'
import styles from './UseDefault.module.css'

export default function UseDocumentTitle() {
  const initialState = { name: 'Tyler' }
  const defaultState = { name: 'Ben' }

  const [user, setUser] = useDefault(initialState, defaultState)

  return (
    <section className={styles.section}>
      <h1>useDefault</h1>

      <button title="Sets the value to Lynn" className={theme.link} onClick={() => setUser({ name: 'Lynn' })}>
        Lynn
      </button>
      <button title="Sets the value to Tyler" className={theme.link} onClick={() => setUser({ name: 'Tyler' })}>
        Tyler
      </button>
      <button
        title="Sets the value to null causing it to use the default value"
        className={theme.link}
        onClick={() => setUser(null)}
      >
        null
      </button>
      <pre>
        <code>{JSON.stringify(user)}</code>
      </pre>
    </section>
  )
}
