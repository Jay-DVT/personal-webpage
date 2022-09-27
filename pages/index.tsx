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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>
      <Header />
      <section id='home' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experience' className='snap-center'>
        <Experience />
      </section>
      <section id='projects' className='snap-center'>
        <Projects />
      </section>
      {/* Contact */}

      {/* Footer */}
    </div>
  )
}

export default Home
