import '../styles/globals.css'
import Head from 'next/head'
import { GymProvider } from '../context/GymContext'

export default function MyApp({ Component, pageProps }) {
  return (
    <GymProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </GymProvider>
  )
}
