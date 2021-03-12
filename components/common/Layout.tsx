import { ReactNode } from 'react'

import Navigation from './Navigation'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
  <div>
    <Navigation />
    {children}
    <Footer />
  </div>
)

export default Layout
