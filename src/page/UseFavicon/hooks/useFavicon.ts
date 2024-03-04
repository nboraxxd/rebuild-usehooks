import { useEffect } from 'react'

export default function useFavicon(favicon: string) {
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>(`link[rel~="icon"]`)

    if (!link) {
      link = document.createElement('link')
      link.type = 'image/x-icon'
      link.rel = 'icon'
      link.href = favicon
      document.head.appendChild(link)
    } else {
      link.href = favicon
    }
  }, [favicon])
}
