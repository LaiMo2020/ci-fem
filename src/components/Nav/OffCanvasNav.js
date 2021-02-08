import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from "../Auth/SignIn";
import SignOut from "../Auth/SignOut";

const OffCanvasNav = ({ user }) => {

    const renderOffCanvasLink = (value, icon) => {
        return (
            <>
                <li className="uk-nav-divider" />
                <li data-uk-toggle="target: #off-canvas-nav">
                    <Link to={`/${value}`}>
                        <span data-uk-icon={icon} />
                        <span className="uk-align-right">{value[0].toUpperCase() + value.slice(1,)}</span>
                    </Link>
                </li>
            </>
        );
    };

    return (
        <ul id="off-canvas-nav" className="uk-nav uk-nav-default">
            {/* sign in || profile */}
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
                    : (
                        <>
                            <li className="uk-nav-divider" />
                            <SignIn viewType="mobile" />
                        </>
                    )
            }
            {/* challenges */}
            {
                renderOffCanvasLink('challenges', 'code')
            }
            {/* forums */}
            {
                user.isAuth
                    ? renderOffCanvasLink('forums', 'commenting')
                    : null
            }
            {/* leaderboards */}
            {
                renderOffCanvasLink('leaderboards', 'hashtag')
            }
            {/* sign out */}
            {
                user.isAuth
                    ? (
                        <>
                            <li className="uk-nav-divider" />
                            <SignOut viewType="mobile" />
                        </>
                    ) : null
            }
            <li className="uk-nav-divider" />
        </ul>
    );
};

export default OffCanvasNav;
