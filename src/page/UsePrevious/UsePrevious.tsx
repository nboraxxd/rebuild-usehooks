import { useState } from 'react'

import { usePrevious } from '@/page/UsePrevious/hooks'
import theme from '@/theme.module.css'
import style from './UsePrevious.module.css'

function getRandomColor() {
  const colors = ['green', 'blue', 'purple', 'red', 'pink']
  return colors[Math.floor(Math.random() * colors.length)]
}

export default function App() {
  const [color, setColor] = useState(getRandomColor())
  const previousColor = usePrevious(color)

  const handleClick = () => {
    function getNewColor() {
      const newColor = getRandomColor()
      if (color === newColor) {
        getNewColor()
      } else {
        setColor(newColor)
      }
    }
    getNewColor()
  }

  return (
    <section className={style.section}>
      <h1>usePrevious</h1>
      <button className={theme.link} onClick={handleClick}>
        Next
      </button>
      <article className={style.article}>
        <figure className={style.figure}>
          <p className={style.p} style={{ background: `var(--${previousColor})` }} />
          <figcaption className={style.figcaption}>Previous: {previousColor}</figcaption>
        </figure>
        <figure className={style.figure}>
          <p className={style.p} style={{ background: `var(--${color})` }} />
          <figcaption className={style.figcaption}>Current: {color}</figcaption>
        </figure>
      </article>
    </section>
  )
}
