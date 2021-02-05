import React, { useEffect } from 'react';

const PublicProfile = ({ user, profile }) => {

    useEffect(() => {
        console.log(user, profile);
    }, []);

    return (
        <div>
            Public
        </div>
    );
};

export default PublicProfile;