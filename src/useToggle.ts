import { useState, useCallback } from 'react'

export default function useToggle(initialValue = true): [boolean, <T>(value?: T) => void] {
  const [on, setOn] = useState(() => (typeof initialValue === 'boolean' ? initialValue : Boolean(initialValue)))

  const handleToggle: <T>(value: T) => void = useCallback((value) => {
    if (typeof value === 'boolean') {
      setOn(value)
    } else {
      setOn((currentValue) => !currentValue)
    }
  }, [])

  return [on, handleToggle]
}
