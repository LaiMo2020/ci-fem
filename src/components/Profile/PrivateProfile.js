import React, { useEffect } from 'react';
import { documentTitle } from "../../utils/componentHelpers";

const PrivateProfile = ({ user }) => {

    useEffect(() => {
        if (user.profile.username)
            documentTitle(`profile : ${user.profile.username}`);
    }, []);

    return (
        <div id="profile">
            <div>
                private profile
            </div>
        </div>
    );
};

export default PrivateProfile;