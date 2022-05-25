import classes from './Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Avatar, Menu, Dropdown, Button } from 'antd';

const Navbar = () => {
    const { data: session } = useSession()
    console.log('navbar-session', session)
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <Image src="/logo.png" width={60} height={50} />
                <span>Wallet3-AX</span>
            </div>
            <div className={classes.linksUser}>
                <div className={classes.linksGroup}>
                    <>
                        {session ?
                            <>
                                <Link href='/home'>Home</Link>
                                <Link href='/home'>About Us</Link>
                                welcome {session?.user?.name}
                            </>
                            :
                            <>
                                <Link href='/home'>Home</Link>
                                <Link href='/home'>About Us</Link>
                                <Link href='/auth/signin'>Sign Up</Link>
                                <Link href='/auth/signin'>Log In</Link>
                            </>

                        }
                    </>

                </div>
                <div className={classes.userAvatar}>
                    <Dropdown
                        overlay={
                            <Menu className={classes.menu}>
                                <Menu.Item key="profile">
                                    Profile
                                </Menu.Item>
                                <Menu.Item key="wallet">
                                    Wallet
                                </Menu.Item>
                                <Menu.Item key="settings">
                                    Settings
                                </Menu.Item>
                                {session &&
                                    <Menu.Item
                                        key="signOut"
                                        onClick={() => signOut({
                                            callbackUrl: `${window.location.origin}/auth/signin`
                                        })}

                                    >
                                        Sign Out
                                    </Menu.Item>
                                }
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