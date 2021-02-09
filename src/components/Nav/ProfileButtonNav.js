import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignOut from "../Auth/SignOut";

const ProfileButtonNav = ({ user, isTouch }) => {
    const [dropDownMode, setDropDownMode] = useState(null);

    useEffect(() => {
        isTouch ? setDropDownMode('click') : setDropDownMode('hover');
    }, [isTouch])

    return (
        <>
            <span id="navProfileButton" className="has-pointer nav-avatar">
                <img src={user.profile.avatar} className="uk-border-circle" alt="user profile" />
            </span>
            {/* dropdown */}
            <div id="desktopDropdownNav" data-uk-dropdown={`mode: ${dropDownMode};  offset: 25; pos: bottom-right; animation: uk-animation-slide-bottom-medium`}>
                <ul className="uk-nav uk-dropdown-nav">
                    <li>
                        <Link to={`/profile/${user.profile.username}`}>
                            <span data-uk-icon="user" />
                            <span className="uk-align-right">Profile</span>
                        </Link>
                    </li>
                    {/* sign out */}
                    <SignOut viewType="desktop" />
                </ul>
            </div>
        </>
    );
};

export default ProfileButtonNav;