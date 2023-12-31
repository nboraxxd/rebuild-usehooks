import { Dispatch, SetStateAction, useState } from 'react'

export default function useDefault<T>(
  initialValue: T,
  defaultValue: T
): [T, Dispatch<SetStateAction<T | null | undefined>>] {
  const [state, setState] = useState<T | null | undefined>(initialValue)

  if (typeof state === 'undefined' || state === null) {
    return [defaultValue, setState]
  }

  return [state, setState]
}
