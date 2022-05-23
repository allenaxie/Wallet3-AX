import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import classes from './Home.module.scss';
import { Row, Col, Tooltip } from 'antd';
import { Footer, Header } from '../../components';


const Home: NextPage = ({ setIndexPage }: any) => {

  useEffect(() => {
    setIndexPage(false);
  }, [])

  return (
    <div
      className={classes.container}
    >
      <Head>
        <title>Wallet3-AX</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
