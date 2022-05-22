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
          whileInView={{ opacity: [0, 1], y:[-100,0] }}
          transition={{ duration: 2 }}
          whileHover={{ scale: 1.15 }}
        >
          3.0 
        </motion.div>
        is here
      </div>
      <button className={classes.ctaBtn} onClick={handleClick}>Step into the future</button>
    </div>
  )
}

export default index;