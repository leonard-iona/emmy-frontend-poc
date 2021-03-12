import { FC, ReactNode } from 'react'

type Props = {
  test: boolean,
  children: ReactNode
}

const Maybe: FC<Props> = ({ test, children }: Props) => <>{test && children}</>

export default Maybe
