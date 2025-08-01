import '../styles/globals.css'
import type { AppProps } from 'next/app'
import StickyContactButtons from '../components/StickyContactButtons'
import AnimatedAutoToolsBackground from '../components/AnimatedAutoToolsBackground'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Google Fonts: Montserrat for headings, Inter for body */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <AnimatedAutoToolsBackground />
      <Component {...pageProps} />
      <StickyContactButtons />
    </>
  )
}