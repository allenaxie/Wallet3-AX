import { useSession, signIn, signOut } from "next-auth/react";
import classes from './Login.module.scss';
import Image from 'next/image';
import { Row, Col} from 'antd';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa';

const Login = ({ providers, session }: any) => {
  // const { data: session } = useSession()

  const providerIcons = [
    <FcGoogle/>,
    <FaGithub/>,
  ]

  if (session) {
    console.log('login-session', session)
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <Image src={`${session?.user?.image}`} width={200} height={200} />
        <h2>{session?.user?.name}</h2>
        <button onClick={() => signOut({
          callbackUrl: `${window.location.origin}/auth/signin`
        })}>Sign out</button>
      </>
    )
  } else {
    return (
      <>
        <Row className={classes.container}>
          {/* <div className={classes.logo}>
            <Image src="/logo.png" width={100} height={100}/>
          </div> */}
          <Col
          xs={{ span: 24 }}
          lg={{ span: 16, offset:4 }}
          className={classes.col1}
          >
            <div className={classes.title}>
              <h1>Login</h1>
            </div>
            Login using your favorite applications!
            {Object.values(providers).map((provider, index)  => (
              <div key={((provider as any).name)} className={classes.providerBtn}
              >
                <button 
                onClick={() => signIn((provider as any).id, {
                  callbackUrl: `${window.location.origin}/home`,
                })}>
                  Sign In with 
                  {providerIcons[index]}
                </button>
              </div>
            ))}
          </Col>
        </Row>

      </>
    )
  }
}

export default Login;
