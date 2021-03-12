import { FC } from 'react';
import styled from '@emotion/styled'

const FooterContainer = styled('footer')`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Logo = styled('img')`
  height: 1em;
`

const Footer: FC = () => {
  return (
    <FooterContainer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}

        <Logo src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </FooterContainer>
  )
}

export default Footer
