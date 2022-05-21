import type { NextPage } from 'next'
import Head from 'next/head';
import classes from '../styles/Home.module.css';
import { Navbar, Footer } from '../components';

const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Wallet3-AX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Navbar/>
    <Footer/>
       
    </div>
  )
}

export default Home
