import classes from './Header.module.scss';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Row, Col, Tooltip } from 'antd';
import { FaGlobeAmericas, FaEthereum } from 'react-icons/fa';
import { BsCurrencyBitcoin } from 'react-icons/bs';

const Header = () => {
  return (
    <Row className={classes.headerContainer}>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 12 }}
          className={classes.headerCol1}
        >
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ opacity: { duration: .5, delay: .25 } }}
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
            transition={{ opacity: { duration: 1 }, delay: .5 }}
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
            animate={{ opacity:[0,1], y:[-200,0] }}
            transition={{ duration: 1, delay: 2}}
          >
            <Tooltip placement="topLeft" title="Bitcoin" color="rgba(226,146,59)">
              <BsCurrencyBitcoin />
            </Tooltip>
          </motion.div>
          <motion.div 
            className={classes.globeSVG}
            animate={{opacity:[0,1]}}
            transition={{ delay:1.5 }}
          >
            <FaGlobeAmericas />
          </motion.div>
          <div className={classes.ethShib}>
            <motion.div 
              className={classes.ethSVG}
              animate={{ opacity:[0,1], y:[300,0] }}
              transition={{ duration: 1, delay: 2}}
            >
              <Tooltip placement="topLeft" title="Ethereum" color="rgba(96,125,166)">
                <FaEthereum />
              </Tooltip>
            </motion.div>
            <motion.div 
            className={classes.shib}
            animate={{ opacity:[0,1], y:[300,0] }}
            transition={{ duration: 1, delay: 2}}
            >
              <Tooltip placement="topLeft" title="Shiba Inu" color="rgba(221,48,33)">
                <Image src="/shiba-inu-svg.png" width={75} height={75} />
              </Tooltip>
            </motion.div>
          </div>
        </Col>
      </Row>
  )
}

export default Header;