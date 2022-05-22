import classes from '../styles/index.module.scss';
import { useRouter } from 'next/router';
import { motion } from "framer-motion";


const index = ({ setIndexPage }: any) => {
  const router = useRouter();

  const handleClick = () => {
    setIndexPage(false);
    router.push('/home');
  }

  return (
    <div className={classes.container}>
      <div className={classes.text}>Web
        <motion.div
          whileInView={{ opacity: [0, 1], y: [-100, 0] }}
          whileHover={{ scale: 1.15 }}
          transition={{ 
            scale: { duration: .5 },
            default:{duration: 2 }
          }}
        >
          3.0
        </motion.div>
        is here
      </div>
      <motion.button
        className={classes.ctaBtn}
        onClick={handleClick}
        whileInView= {{ opacity: [ 0, 1 ], y: [ 200,0 ]}}
        whileHover={{ scale: 1.05}}
        transition={{ 
          scale: {duration: .6, repeat: Infinity, repeatType: "reverse"},
          default: {duration: 1.2, delay: 1}
        }}
      >
        Step into the future
      </motion.button>
    </div>
  )
}

export default index;