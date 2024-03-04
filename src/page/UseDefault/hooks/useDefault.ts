import { Dispatch, SetStateAction, useState } from 'react'

type State<S> = S | null | undefined

type UseDefaultReturn<S> = [State<S>, Dispatch<SetStateAction<State<S>>>]

export default function useDefault<T>(initialState: State<T>, defaultState: T): UseDefaultReturn<T> {
  const [state, setState] = useState(initialState)

  if (typeof state === 'undefined' || state === null) {
    return [defaultState, setState]
  }

  return [state, setState]
}
