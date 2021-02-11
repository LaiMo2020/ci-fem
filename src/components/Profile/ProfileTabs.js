import React, { useState } from 'react';

const ProfileTabs = ({ setCurrentTab }) => {
    const [isActive, setIsActive] = useState('info');

    const handleTabClick = value => {
        setCurrentTab(value);
        setIsActive(value);
    };

    return (
        <div id="profile-tabs">
            <ul className="uk-flex-right" data-uk-tab>
                <li className={isActive == 'info' ? 'uk-active' : ''}>
                    <a href="#" onClick={() => handleTabClick('info')}>
                        Info
                    </a>
                </li>
                <li className={isActive == 'submissions' ? 'uk-active' : ''}>
                    <a href="#" onClick={() => handleTabClick('submissions')}>
                        Submissions
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ProfileTabs;