import classes from './auth.module.scss';
import { useState, useEffect } from 'react';

const AuthPage = ({ setIndexPage }: any) => {

    useEffect(() => {
        // show navbar
        setIndexPage(false);
    }, [])
    
    return (
        <div className={classes.container}>
            Auth
        </div>
    )
}

export default AuthPage;