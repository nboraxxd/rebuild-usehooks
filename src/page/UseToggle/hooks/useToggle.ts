import { useCallback, useState } from 'react'

export default function useToggle<T>(initialValue: T | boolean = true): [boolean, <V>(value?: V) => void] {
  const [on, setOn] = useState(() => {
    if (typeof initialValue === 'boolean') {
      return initialValue
    }
    return Boolean(initialValue)
  })

  const handleToggle = useCallback(<V>(value?: V) => {
    if (typeof value === 'boolean') {
      return setOn(value)
    }

    return setOn((v) => !v)
  }, [])

  return [on, handleToggle]
}
