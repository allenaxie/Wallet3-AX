import type { NextPage } from 'next'
import Head from 'next/head';
import classes from './Home.module.scss';
import { Row, Col } from 'antd';
import { Footer } from '../../components';

const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Wallet3-AX</title>
        <link rel="icon" href="/logo.png" />
      </Head>
    
    <Row className={classes.headerContainer}>
      <Col 
        xs={{span:24}}
        lg={{span:12}}
        className={classes.headerText}
      >
        <div>
          <span>The <span>future</span> is here</span>
        </div>
      </Col>
      <Col 
        xs={{span:24}}
        lg={{span:12}}
        className={classes.headerImg}
      >
        image
      </Col>
    </Row>

    <Footer/>   
    </div>
  )
}

export default Home
