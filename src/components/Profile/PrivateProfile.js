import React, { useEffect } from 'react';
import { setTitle } from "../../utils/componentHelpers";

const PrivateProfile = ({ user }) => {

    useEffect(() => {
       setTitle(`profile : ${user.profile.username}`);
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