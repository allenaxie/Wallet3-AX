import { useSession, signIn, signOut } from "next-auth/react";
import classes from './Login.module.scss';
import Image from 'next/image';

const Login = () => {
    const { data: session } = useSession()
    if (session) {
      // if (true) {
        console.log('login-session', session)
      return (
        <>
          Signed in as {session?.user?.email} <br />
          <Image src={`${session?.user?.image}`} width={200} height={200}/> 
          <h2>{session?.user?.name}</h2>
          <button onClick={() => signOut({
              callbackUrl: `${window.location.origin}/auth/signin`
          })}>Sign out</button>
        </>
      )
    }
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
}

export default Login;
