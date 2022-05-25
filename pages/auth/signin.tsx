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
            <Login providers={providers} session={session}/>
 
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