import { useSyncExternalStore } from 'react'

const subscribe = (cb: () => void) => {
  window.addEventListener('languagechange', cb)
  return () => window.removeEventListener('languagechange', cb)
}

const getSnapshot = () => {
  return window.navigator.language
}

const getServerSnapshot = () => {
  throw Error('usePreferredLanguage is a client-only hook')
}

export default function usePreferredLanguage() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
