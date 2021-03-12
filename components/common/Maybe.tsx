import { ReactNode } from 'react'

type Props = {
  test: boolean,
  children: ReactNode
}

const Maybe = ({ test, children }) => <>{test && children}</>

export default Maybe
