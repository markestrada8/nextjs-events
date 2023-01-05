import Footer from '../src/components/footer/footer'
import Header from '../src/components/header/header'
import '../styles/globals.css'
import '../styles/general.sass'
import { Cabin } from '@next/font/google'
// import MainLayout from '.././src/components/layout/main-layout'
// import type { AppProps } from 'next/app'

const cabin = Cabin({ subsets: ['latin'] })

function App({ Component, pageProps }) {
  return (
    <>
      <Header className={cabin.className} />
      <Component {...pageProps} />
      <Footer />
    </>
  )

};

export default App
