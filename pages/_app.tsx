import 'antd/dist/antd.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { Navbar, Footer } from '../components';
import { getProviders, signIn, getSession, SessionProvider } from "next-auth/react";


const MyApp = ({
  Component,
  pageProps: { session, ...pageProps }
}: any) => {
  const [indexPage, setIndexPage] = useState(true);
  const [currentUser, setCurrentUser] = useState('');
  console.log('session',session);

  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>Wallet3-AX</title>
        </Head>
        {indexPage ||
          <Navbar />
        }
        <Component {...pageProps} indexPage={indexPage} setIndexPage={setIndexPage} />
      </SessionProvider>
    </>

  )
}

export default MyApp;

