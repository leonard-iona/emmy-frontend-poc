import { ReactNode, Dispatch, createContext, useContext, useState } from 'react'

export type PageDispatch = Dispatch<any>

type Props = {
  children?: ReactNode
}

const AppStateContext = createContext<number | undefined>(undefined)

const AppDispatchContext = createContext<AppDispatch | undefined>(
  undefined
)

const AppContextProvider = ({ children }: Props) => {
  const [something, setSomething] = useState<number | undefined>()

  return (
    <AppDispatchContext.Provider value={{setSomething}}>
      <AppStateContext.Provider value={{something}}>
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
  const dispatch = useContext(PageDispatchContext)
  return dispatch
}

export default AppContextProvider
