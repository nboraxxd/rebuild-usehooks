import { useState } from 'react'

import { useFavicon } from '@/page/UseFavicon/hooks'
import theme from '@/theme.module.css'
import style from './UseFavicon.module.css'

const faviconMap = {
  uidotdev: 'https://ui.dev/favicon/favicon-32x32.png',
  bytes: 'https://bytes.dev/favicon/favicon-32x32.png',
  react_newsletter: 'https://reactnewsletter.com/favicon/favicon-32x32.png',
}

export default function App() {
  const [id, setId] = useState<keyof typeof faviconMap>('uidotdev')

  useFavicon(faviconMap[id])

  return (
    <section className={style.section}>
      <h1>useFavicon</h1>
      <button
        title="Set the favicon to uidotdev's logo"
        className={`${theme.link} ${id === 'uidotdev' ? style.active : ''}`}
        onClick={() => setId('uidotdev')}
      >
        ui.dev
      </button>
      <button
        title="Set the favicon to Bytes' logo"
        className={`${theme.link} ${id === 'bytes' ? style.active : ''}`}
        onClick={() => setId('bytes')}
      >
        bytes
      </button>
      <button
        title="Set the favicon to React Newsletter's logo"
        className={`${theme.link} ${id === 'react_newsletter' ? style.active : ''}`}
        onClick={() => setId('react_newsletter')}
      >
        react newsletter
      </button>

      <p className={style.p}>
        You won't be able to see the changes if you're in a sandbox environment. Instead, you'll want to open up the app{' '}
        <a className={theme.link} href="https://xckn4k.csb.app/" target="_blank" rel="noreferrer">
          in a new tab
        </a>
        .
      </p>
    </section>
  )
}
