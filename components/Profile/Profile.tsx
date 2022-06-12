import classes from "./Profile.module.scss";
import { Row, Col, Image, Divider } from 'antd';
import { useSession } from 'next-auth/react';

const Profile = () => {
    const { data: session } = useSession();
    console.log(session)

    return (
        <div className={classes.container}>
            <Row>
                <Col
                    xs={{ span: 24 }}
                    lg={{ span: 10 }}
                    className={classes.col1}
                >
                    <Image src={session?.user?.image!}/>
                    <Divider className={classes.divider}></Divider>
                </Col>
                <Col
                    xs={{ span: 24 }}
                    lg={{ span: 14 }}
                    className={classes.col2}
                >
                    <h1> {session?.user?.name} </h1>
                    <h3> {session?.user?.email} </h3>
                </Col>
            </Row>
        </div>
    )
}

export default Profile;