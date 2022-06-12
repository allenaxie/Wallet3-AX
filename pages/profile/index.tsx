import classes from "./index.module.scss";
import { useEffect } from 'react';

const Profile = ({ providers, session, setIndexPage }: any) => {

    useEffect(() => {
        // show navbar
        setIndexPage(false);
    }, [])

    console.log(session);

    return (
        <div className={classes.container}>
            Profileeeee
        </div>
    )
}

export default Profile;