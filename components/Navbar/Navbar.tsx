import classes from './Navbar.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Avatar, Menu, Dropdown, Button } from 'antd';
import { AiOutlineUser } from 'react-icons/ai';
import { BsWallet2 } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiOutlineLogout } from 'react-icons/hi';

const Navbar = () => {
    const { data: session } = useSession();
    console.log('navbar-session', session)

    const router = useRouter();

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
                            </>
                            :
                            <>
                                <Link href='/home'>Home</Link>
                                <Link href='/home'>About Us</Link>
                                <Link href='/auth/signin'>Log In</Link>
                            </>

                        }
                    </>

                </div>
                <div className={classes.userAvatar}>
                    <Dropdown
                        overlay={
                            <>
                                <Menu className={classes.menu}>
                                    {session ?

                                        <>
                                            <div className={classes.welcome}>
                                                <span >Welcome <span> {session?.user?.name} </span> !</span>
                                            </div>
                                            <Menu.Item key="profile" className={classes.userMenuItem}>
                                                <AiOutlineUser />
                                                <Link href="/profile">
                                                    Profile
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item key="wallet" className={classes.userMenuItem}>
                                                <BsWallet2/>
                                                <span>
                                                    Wallet
                                                </span>
                                            </Menu.Item>
                                            <Menu.Item key="settings" className={classes.userMenuItem}>
                                                <IoSettingsOutline/>
                                                <span>
                                                    Settings
                                                </span>
                                            </Menu.Item>

                                            <Menu.Item
                                                key="signOut"
                                                onClick={() => signOut({
                                                    callbackUrl: `${window.location.origin}/auth/signin`
                                                })}
                                                className={classes.userMenuItem}
                                            >
                                                <HiOutlineLogout/>
                                                <span>
                                                    Sign Out
                                                </span>
                                            </Menu.Item>
                                        </>
                                        :
                                        <>
                                            <Menu.Item
                                                key="signIn"
                                                onClick={() => router.push('/auth/signin')}
                                            >
                                                Log In
                                            </Menu.Item>
                                        </>
                                    }
                                </Menu>
                            </>
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