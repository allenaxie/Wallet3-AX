import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import classes from './Home.module.scss';
import { Row, Col, Tooltip } from 'antd';
import { Footer } from '../../components';
import { FaGlobeAmericas, FaEthereum } from 'react-icons/fa';
import { BsCurrencyBitcoin } from 'react-icons/bs';

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


      <Row className={classes.headerContainer}>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 12 }}
          className={classes.headerCol1}
        >
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ opacity: { duration: .5 } }}
            className={classes.headerTextContainer}
          >
            <span>The <span>wallet </span>
              for
              <br />
              your
              <span> Web 3</span>
            </span>
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ opacity: { duration: .5 }, delay: .5 }}
            className={classes.headerDescription}
          >
            <p> Connect your crypto wallet and start your web 3 journey today.</p>
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 1], y: [200, 0] }}
            transition={{ duration: 1, delay: 1, type: 'tween' }}
            className={classes.headerBtn}
          >
            <motion.button
              whileHover={{ boxShadow: "2px 2px 8px #fff", y: (-2) }}
            >
              Get started
            </motion.button>
          </motion.div>
        </Col>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 12 }}
          className={classes.headerCol2}
        >
          <motion.div
            className={classes.btcSVG}
          >
            <Tooltip placement="topLeft" title="Bitcoin" color="rgba(226,146,59)">
              <BsCurrencyBitcoin />
            </Tooltip>
          </motion.div>
          <div className={classes.globeSVG}>
            <FaGlobeAmericas />
          </div>
          <div className={classes.ethShib}>
            <motion.div className={classes.ethSVG}>
              <Tooltip placement="topLeft" title="Ethereum" color="rgba(96,125,166)">
                <FaEthereum />
              </Tooltip>
            </motion.div>
            <motion.div className={classes.shib}>
              <Tooltip placement="topLeft" title="Shiba Inu" color="rgba(221,48,33)">
                <Image src="/shiba-inu-svg.png" width={75} height={75} />
              </Tooltip>
            </motion.div>
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  )
}

export default Home
