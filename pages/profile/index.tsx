import classes from "./index.module.scss";
import { useEffect } from 'react';
import { Profile } from "../../components";

const ProfilePage = ({ providers, session, setIndexPage }: any) => {

    useEffect(() => {
        // show navbar
        setIndexPage(false);
    }, [])

    console.log(session);

    return (
        <div className={classes.container}>
            <Profile/>
        </div>
    )
}

export default ProfilePage;