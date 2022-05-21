import classes from './Navbar.module.scss';
import Image from 'next/image';
import { Avatar, Menu, Dropdown, Button } from 'antd';

const Navbar = () => {

    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <Image src="/logo.png" width={60} height={50} />
                <span>Wallet3-AX</span>
            </div>
            <div className={classes.linksUser}>
                <div className={classes.linksGroup}>
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Link 3</div>
                    <div>Link 4</div>
                </div>
                <div className={classes.userAvatar}>
                    <Dropdown
                        overlay={
                            <Menu className={classes.menu}>
                                <Menu.Item>
                                    Profile
                                </Menu.Item>
                                <Menu.Item>
                                    Wallet
                                </Menu.Item>
                                <Menu.Item>
                                    Settings
                                </Menu.Item>
                            </Menu>
                        }
                        placement="bottomRight"
                        arrow={true}
                    >
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Navbar;