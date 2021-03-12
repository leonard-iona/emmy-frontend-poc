import { FC, ReactNode } from 'react'

import AppContext from './AppContext'

type Props = {
  children?: ReactNode
}

const ContextProvider: FC = ({ children }: Props) => (
  <AppContext>
    {/* <SomeOtherContext> */}
    {children}
    {/* </SomeOtherContext> */}
  </AppContext>
)

export default ContextProvider
