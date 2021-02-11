import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProfileInfo = ({ user, requestedProfile, isPrivateProfile}) => {
    const data = isPrivateProfile ? user.profile : requestedProfile;
    
    useEffect(() => {
        console.log(data);
    }, [])

    return (
        <div id="profile-info">
            <div className="uk-grid uk-child-width-1-2@s" data-uk-grid>
                <div>
                    <div id="profile-left" className="uk-align-center">
                        {/* edit avatar */}
                        <div id="profile-avatar">
                            <img src={data.avatar} alt="profile" />
                        </div>
                        
                        {/* username */}
                        <div>
                            <p className="uk-text-bold uk-text-italic username">
                                <span>@{ data.username }</span>
                                <span className={ data.isOnline ? 'online-icon' : 'offline-icon'} />
                            </p>
                            <p className="uk-h2 uk-text-bolder uk-margin-remove-top">
                                { data.github.name }
                            </p>
                        </div>

                        {/* about */}
                        <div>
                            <p className="uk-text-meta">
                                { data.github.bio }
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div id="profile-right">

                        <div id="profile-info-links">
                            <span>
                                <span className="logo-icons" data-uk-icon="users" />
                                <a href={`${data.github.profile_url}?tab=followers`} target="_blank">{ data.github.followers }</a>
                            </span>
                            <span>
                                <span className="logo-icons" data-uk-icon="github" />
                                <a href={data.github.profile_url} target="_blank">Github</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;