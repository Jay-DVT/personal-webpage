import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header, Hero, About, Experience, Projects, Contact, Footer } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Diego Villanueva</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Hero */}
      <section id='home' className='snap-start'>
        <Hero />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Experience */}

      {/* Projects */}

      {/* Contact */}

      {/* Footer */}
    </div>
  )
}

export default Home
