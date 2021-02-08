import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from "../Auth/SignIn";
import SignOut from "../Auth/SignOut";

const OffCanvasNav = ({ user }) => {
    return (
        <ul id="off-canvas-nav" className="uk-nav uk-nav-default">
            {/* sign in */}
            {
                !user.isAuth
                    ? (
                        <>
                            <li className="uk-nav-divider" />
                            <SignIn viewType="mobile" />
                        </>
                    )
                    : null
            }
            {/* profile */}
            {
                user.isAuth
                    ? (
                        <>
                            <li className="uk-nav-divider" />
                            <li data-uk-toggle="target: #off-canvas-nav">
                                <Link to={`/profile/${user.profile.username}`}>
                                    <img
                                        src={user.profile.avatar}
                                        className="uk-border-circle"
                                        alt="user profile"
                                        height="20"
                                        width="20"
                                    />
                                    <span className="uk-align-right">Profile</span>
                                </Link>
                            </li>
                        </>
                    )
                    : null
            }
            {/* challenges */}
            <li className="uk-nav-divider" />
            <li data-uk-toggle="target: #off-canvas-nav">
                <Link to="/challenges">
                    <span data-uk-icon="code" />
                    <span className="uk-align-right">Challenges</span>
                </Link>
            </li>
            {/* forums */}
            {
                user.isAuth
                    ? (
                        <>
                            <li className="uk-nav-divider" />
                            <li data-uk-toggle="target: #off-canvas-nav">
                                <Link to="/forum">
                                    <span data-uk-icon="commenting" />
                                    <span className="uk-align-right">Forum</span>
                                </Link>
                            </li>
                        </>
                    )
                    : null
            }
            {/* leaderboards */}
            <li className="uk-nav-divider" />
            <li data-uk-toggle="target: #off-canvas-nav">
                <Link to="/leaderboards">
                    <span data-uk-icon="hashtag" />
                    <span className="uk-align-right">Leaderboards</span>
                </Link>
            </li>
            {/* sign out */}
            {
                user.isAuth
                    ? (
                        <>
                            <li className="uk-nav-divider" />
                            <SignOut viewType="mobile" />
                        </>
                    )
                    : null
            }
        </ul>
    );
};

export default OffCanvasNav;
