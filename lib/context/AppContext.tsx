/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { FC, ReactNode, Dispatch, createContext, useContext, useState } from 'react'

export type PageDispatch = Dispatch<any>

type Props = {
  children?: ReactNode
}

const AppStateContext = createContext({})

const AppDispatchContext = createContext({})

const AppContextProvider: FC = ({ children }: Props) => {
  const [something, setSomething] = useState<number | undefined>()

  return (
    <AppDispatchContext.Provider value={{ setSomething }}>
      <AppStateContext.Provider value={{ something }}>
        {children}
      </AppStateContext.Provider >
    </AppDispatchContext.Provider>
  )
}

export const useAppState = () => {
  const state = useContext(AppStateContext)
  return state
}

export const useAppDispatch = () => {
  const dispatch = useContext(AppDispatchContext)
  return dispatch
}

export default AppContextProvider
