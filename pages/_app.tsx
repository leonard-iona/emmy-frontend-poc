import { FC } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from 'components/common/Layout'
import ContextProvider from 'lib/context'
import 'styles.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <div>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </Head>
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  </div>
)

export default MyApp
