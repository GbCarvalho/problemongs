import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import {Footer} from '../components/Footer'
import { Provider as NextAuthProvider } from 'next-auth/client'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      {/*       <Component {...pageProps} /> */}
      <Footer />
    </NextAuthProvider>
  )
}

export default MyApp
