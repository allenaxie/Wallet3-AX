import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={classes.container}>
        <div className={classes.logo}>
            LOGO
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