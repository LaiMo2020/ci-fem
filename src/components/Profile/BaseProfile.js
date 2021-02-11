import React, { useState, useEffect } from 'react';
import { setTitle } from "../../utils/componentHelpers";
import ProfileTabs from './ProfileTabs';
import ProfileInfo from './ProfileInfo';
import ProfileSubmissions from './ProfileSubmissions';
import './styles/Profile.scss';

const BaseProfile = props => {
    const [currentTab, setCurrentTab] = useState('info');

    useEffect(() => {
        props.isPrivateProfile
            ? setTitle(`profile : ${props.user?.profile?.username}`)
            : setTitle(`profile : ${props.requestedProfile?.username}`)
    }, []);

    return (
        <div id="profile">
            <ProfileTabs setCurrentTab={setCurrentTab} />
            {
                currentTab === 'info'
                    ? <ProfileInfo {...props} />
                    : <ProfileSubmissions {...props} />
            }
        </div>
    );
};

export default BaseProfile;