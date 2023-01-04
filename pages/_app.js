import Footer from '../src/components/footer/footer'
import Header from '../src/components/header/header'
import '../styles/globals.css'
import '../styles/general.sass'
import MainLayout from '.././src/components/layout/main-layout'
// import type { AppProps } from 'next/app'

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )

};

export default App
