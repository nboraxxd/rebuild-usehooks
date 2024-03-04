import { usePreferredLanguage } from '@/page/UsePreferredLanguage/hooks'
import style from './UsePreferredLanguage.module.css'

export default function App() {
  const language = usePreferredLanguage()

  return (
    <section className={style.section}>
      <h1>usePreferredLanguage</h1>
      <p className={style.p}>Change language here - chrome://settings/languages</p>
      <h2>
        The correct date format for <pre className={style.pre}>{language}</pre> is{' '}
        <time className={style.time}>{new Date(Date.now()).toLocaleDateString(language)}</time>
      </h2>
    </section>
  )
}
