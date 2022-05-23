import classes from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.linksGroup}>
        <Link href='#'>Contact Us</Link>
        <Link href='#'>FAQ</Link>
        <Link href='#'>Privacy Policy</Link>
      </div>
      <div className={classes.logo}>
        <Image src="/logo.png" width={150} height={150}/>
      </div>
      <div className={classes.copyright}>
        <span> © 2022 Wallet3-AX All Rights Reserved.</span>
      </div>
    </div>
  )
}

export default Footer;