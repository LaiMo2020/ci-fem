import React, { useEffect } from 'react';
import { documentTitle } from "../../utils/componentHelpers";

const PublicProfile = ({ user, profile }) => {

    useEffect(() => {
        if (profile.username) {
            documentTitle(`profile : ${profile.username}`);
        }
    }, []);

    return (
        <div>
            public profile
        </div>
    );
};

export default PublicProfile;