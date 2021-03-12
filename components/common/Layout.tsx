import { FC, ReactNode } from 'react'

import Navigation from './Navigation'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

const Layout: FC = ({ children }: Props) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
