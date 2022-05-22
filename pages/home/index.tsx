import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import classes from './Home.module.scss';
import { Row, Col } from 'antd';
import { Footer } from '../../components';


const Home: NextPage = ({setIndexPage}:any) => {

  useEffect(() => {
    setIndexPage(false);
  },[])

  return (
    <div className={classes.container}>
      <Head>
        <title>Wallet3-AX</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Row className={classes.headerContainer}>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 12 }}
            className={classes.col1}
          >
            <div className={classes.headerTextContainer}>
              <span>The <span>wallet </span>
                for 
                <br />
                your
                <span> Web 3</span>
              </span>
            </div>
            <div className={classes.headerDescription}>
              <p> Connect your crypto wallet and start your web 3 journey today.</p>
            </div>
            <div className={classes.headerBtn}>
              <motion.button
                whileHover={{ boxShadow:"2px 4px 8px rgba(0,0,0,0.2)", y:(-2)}}
              >
                Get started
              </motion.button>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 12 }}
            className={classes.headerImg}
          >
            image
          </Col>
      </Row>

      <Footer />
    </div>
  )
}

export default Home
