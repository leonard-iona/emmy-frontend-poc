import { ReactNode } from 'react'

import AppContext from './AppContext'

type Props = {
  children?: ReactNode
}

const ContextProvider = ({ children }: Props) => (
  <AppContext>
    {/* <SomeOtherContext> */}
    {children}
    {/* </SomeOtherContext> */}
  </AppContext>
)

export default ContextProvider
