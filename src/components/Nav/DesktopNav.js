import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../App/Logo';
import ProfileButtonNav from "./ProfileButtonNav";
import SignIn from "../Auth/SignIn";

const DesktopNav = ({ user, isTouch }) => {

    const renderNavLinks = () => {
        const navItems = user.isAuth
            ? ['challenges', 'forum', 'leaderboards']
            : ['challenges', 'leaderboards'];

        return navItems.map((item, i) => (
            <li key={`navbar-item-${i}`}>
                <Link to={`/${item}`} className="underline-center">{item}</Link>
            </li>
        ));
    };

    return (
        <div id="navbar-center" className="uk-navbar-center">
            <div className="uk-navbar-left">
                <Logo />
            </div>
            <div className="uk-navbar-right">

                {/* nav items */}
                <ul className="uk-navbar-nav">
                    {renderNavLinks()}
                </ul>
                
                {/* auth / profile */}
                {
                    user.isAuth
                        ? <ProfileButtonNav user={user} isTouch={isTouch} />
                        : <SignIn viewType="desktop" />
                }
            </div>
        </div>
    );
};

export default DesktopNav;