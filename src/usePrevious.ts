import { useState } from 'react'

export default function usePrevious<T>(value: T) {
  const [current, setCurrent] = useState(value)
  const [previous, setPrevious] = useState<T | null>(null)

  if (current !== value) {
    setPrevious(current)
    setCurrent(value)
  }

  return previous
}
