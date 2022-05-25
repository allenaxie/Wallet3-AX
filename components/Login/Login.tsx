import { useSession, signIn, signOut } from "next-auth/react";
import classes from './Login.module.scss';
import Image from 'next/image';

const Login = ({ providers, session }: any) => {
  // const { data: session } = useSession()
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
        Not signed in <br />
        {Object.values(providers).map((provider)  => (
          <div key={((provider as any).name)}>
            <button onClick={() => signIn((provider as any).id, {
              callbackUrl: `${window.location.origin}/home`,
            })}>
              Sign in with {(provider as any).name}
            </button>
          </div>
        ))}

      </>
    )
  }
}

export default Login;
