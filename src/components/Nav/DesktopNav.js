import React from 'react';
import SignIn from "../Auth/SignIn";
import ProfileButtonNav from "./ProfileButtonNav";

const DesktopNav = ({ user }) => {
    return (
        <>
            <div className="uk-navbar-left">desktop logo</div>
            <div className="uk-navbar-right">
                {
                    user.isAuth
                        ? <ProfileButtonNav user={user} />
                        : <SignIn />
                }
            </div>
        </>
    );
};

export default DesktopNav;