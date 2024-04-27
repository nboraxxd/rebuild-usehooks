import { useMediaQuery } from '@/page/UseMediaQuery/hooks'
import { phone, tablet, laptop, desktop } from './icons'
import style from './UseMediaQuery.module.css'

export default function UseMediaQuery() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)')
  const isMediumDevice = useMediaQuery('only screen and (min-width : 769px) and (max-width : 992px)')
  const isLargeDevice = useMediaQuery('only screen and (min-width : 993px) and (max-width : 1200px)')
  const isExtraLargeDevice = useMediaQuery('only screen and (min-width : 1201px)')

  return (
    <section className={style.section}>
      <h1>useMediaQuery</h1>
      Resize your browser windows to see changes.
      <article>
        <figure className={isSmallDevice ? `${style.active}` : ''}>
          {phone}
          <figcaption>Small</figcaption>
        </figure>
        <figure className={isMediumDevice ? `${style.active}` : ''}>
          {tablet}
          <figcaption>Medium</figcaption>
        </figure>

        <figure className={isLargeDevice ? `${style.active}` : ''}>
          {laptop}
          <figcaption>Large</figcaption>
        </figure>
        <figure className={isExtraLargeDevice ? `${style.active}` : ''}>
          {desktop}
          <figcaption>Extra Large</figcaption>
        </figure>
      </article>
    </section>
  )
}
