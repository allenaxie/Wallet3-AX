import { getProviders, signIn, getSession } from "next-auth/react";
import classes from './auth.module.scss';
import { useEffect } from 'react';
import {Login} from '../../components';

const SignIn = ({ providers, session, setIndexPage }: any) => {
    useEffect(() => {
        // show navbar
        setIndexPage(false);
    }, [])
    return (
        <div className={classes.container}>
            <h1>Sign In Page</h1>
            <Login providers={providers} session={session}/>
            {/* {Object.values(providers).map((provider) => (
                <div key={provider?.name}>
                    <button onClick={() => signIn(provider.id, {
                        callbackUrl: `${window.location.origin}/home`,
                    })}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))} */}
        </div>
    );
}

export default SignIn;

export async function getServerSideProps(context:any) {
    return {
        props: {
            providers: await getProviders(),
            session: await getSession(context),
        }
    };
}