import classes from './Navbar.module.scss';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={classes.container}>
        <div className={classes.logo}>
            <Image src="/logo.png" width={60} height={50}/>
            <span>Wallet3-AX</span>
        </div>
        <div>

        </div>
        <div className={classes.linksUser}>
            <div className={classes.linksGroup}>
                <div>Link 1</div>
                <div>Link 2</div>
                <div>Link 3</div>
                <div>Link 4</div>
            </div>
            <div className={classes.userAvatar}>
                Avatar
            </div>
        </div>
    </div>
  )
}

export default Navbar;