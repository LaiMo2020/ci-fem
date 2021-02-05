import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useOutsideClick from "../../hooks/useOutsideClick";
import SignOut from "../Auth/SignOut";

const ProfileButtonNav = ({ user }) => {
    const [showDropdownNav, setShowDropdownNav] = useState(false);
    const ref = useRef();

    useOutsideClick(ref, () => {
        if (showDropdownNav) setShowDropdownNav(false);
    });

    const dropDownNav = () => {
        return (
            <ul>
                <li>
                    <Link to={`/profile/${user.profile.username}`}>Profile</Link>
                </li>
                <SignOut />
            </ul>
        );
    };

    return (
        <>
            <span id="navProfileButton" className="has-pointer nav-avatar" onClick={() => setShowDropdownNav(true)}>
                <img src={user.profile.avatar} className="uk-border-circle" alt="user profile" />
            </span>

            <div id="desktopDropdownNav" ref={ref}>
                {
                    showDropdownNav
                        ? dropDownNav()
                        : null
                }
            </div>
        </>
    );
};

export default ProfileButtonNav;