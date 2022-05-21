import classes from '../styles/index.module.scss';
import { useRouter } from 'next/router';


const index = ({setIndexPage}:any) => {
  const router = useRouter();

  const handleClick = () => {
    setIndexPage(false);
    router.push('/home');
  }

  return (
    <div className={classes.container}>
      <div>Web 3.0 is here</div>
      <button className={classes.ctaBtn} onClick={handleClick}>Step into the future</button>
    </div>
  )
}

export default index;