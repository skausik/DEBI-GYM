import Head from 'next/head'
import Cursor from '../components/Cursor'
import FloatingActionButtons from '../components/FloatingActionButtons'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import Stats from '../components/Stats'
import About from '../components/About'
import Services from '../components/Services'
import Hours from '../components/Hours'
import Location from '../components/Location'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <>
      <Head>
        <title>Debi Gymnasium — Jhargram</title>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@300;400;600;700;900&family=Barlow:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <Cursor />
      <FloatingActionButtons />
      <Navigation />
      <Hero />
      <Ticker />
      <Stats />
      <About />
      <Services />
      <Hours />
      <Location />
      <CTABanner />
      <Footer />
    </>
  )
}
