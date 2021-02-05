import React, { useEffect } from 'react';

const PrivateProfile = ({ user }) => {

    useEffect(() => {
        console.log(user.profile);
    }, []);

    return (
        <div>
            Private
        </div>
    );
};

export default PrivateProfile;