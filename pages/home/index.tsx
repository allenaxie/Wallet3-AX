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

      <Row className={classes.infoSection}>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 8 }}
        >
          <Image src="/crypto-wallet.jpeg" width={280} height={160} />
          <span className={classes.infoWalletTitle}>
            Connect <span> Wallet </span>
          </span>
        </Col>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 8 }}
        >
          <Image src="/send-crypto.png" width={280} height={160} />
          <span className={classes.infoCryptoTitle}>
            Send <span> Crypto </span>
          </span>
        </Col>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 8 }}
        >
          <Image src="/track-transactions.png" width={280} height={160} />
          <span className={classes.infoTxTitle}>
            Track <span> Transactions </span>
          </span>
        </Col>
        <div className={classes.infoPrimaryText}>
          <div >
            Wallet3-AX is your <span> All-in-One </span> Web 3.0 application.
            <br />
            <p>More features coming soon.</p>
          </div>
        </div>
      </Row>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
