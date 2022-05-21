import 'antd/dist/antd.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Navbar, Footer } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  const [indexPage, setIndexPage] = useState(true)

  return (
    <>
      {indexPage || 
        <Navbar/>
      }
      <Component {...pageProps} setIndexPage={setIndexPage}/>
    </>
  )
}

export default MyApp;
