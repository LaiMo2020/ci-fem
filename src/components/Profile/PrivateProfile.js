import React, { useEffect } from 'react';

const PrivateProfile = ({ user }) => {

    useEffect(() => {
        console.log(user.profile);
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