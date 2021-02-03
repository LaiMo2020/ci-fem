import React, { useEffect } from 'react';
import SignIn from '../Auth/SignIn';
import SignOut from '../Auth/SignOut';

const Testing = ({ user }) => {

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div>
            {
                user.profile && user?.isAuth
                    ? (
                        <>
                            <p>username:  {user.profile.username}</p>
                            <SignOut />
                        </>
                    )
                    : <SignIn />
            }
        </div>
    );
};

export default Testing;