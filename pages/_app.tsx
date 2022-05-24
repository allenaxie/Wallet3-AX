import 'antd/dist/antd.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { Navbar, Footer } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  const [indexPage, setIndexPage] = useState(true);
  const [currentUser, setCurrentUser] = useState('');

  return (
    <>
      <Head>
        <title>Wallet3-AX</title>
      </Head>
      {indexPage ||
        <Navbar />
      }
      <Component {...pageProps} indexPage={indexPage} setIndexPage={setIndexPage} />
    </>
  )
}

export default MyApp;
