import { useToggle } from '@/page/UseToggle/hooks'
import theme from '@/theme.module.css'
import styles from './UseDocumentTitle.module.css'

interface ToggleProps {
  on: boolean
  toggle: <V>(value?: V | undefined) => void
}

function Toggle({ on, toggle }: ToggleProps) {
  return (
    <div>
      <label className={styles.toggle}>
        <input onChange={toggle} className={styles['toggle-checkbox']} type="checkbox" checked={on} />
        <div className={styles['toggle-switch']}></div>
        <span className={styles['toggle-label']}>{on ? 'On' : 'Off'}</span>
      </label>
    </div>
  )
}

export default function UseToggle() {
  const [on, toggle] = useToggle(true)

  return (
    <section className={styles.section}>
      <h1>UseToggle</h1>

      <button disabled={on} className={theme.link} onClick={() => toggle(true)}>
        Turn On
      </button>
      <button disabled={!on} className={theme.link} onClick={() => toggle(false)}>
        Turn Off
      </button>
      <button className={theme.link} onClick={toggle}>
        Toggle
      </button>
      <button className={theme.link} onClick={() => toggle('nope')}>
        (Also toggles)
      </button>
      <Toggle toggle={toggle} on={on} />
    </section>
  )
}
