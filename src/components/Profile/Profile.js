import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { getUserProfileByUsername } from '../../services/profileService';
import Loader from '../App/Loader';
import PrivateProfile from './PrivateProfile';
import PublicProfile from "./PublicProfile";

const Profile = (props) => {
    const [isPrivateProfile, setIsPrivateProfile] = useState(null);
    const [requestedProfile, setRequestedProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false
        };
    }, [])

    useEffect(() => {
        if (isMounted.current && props?.match?.params?.username) {
            const { user, match } = props;

            (async () => {
                // checking for a private profile
                if (user.isAuth && (user.profile.username === match.params.username)) setIsPrivateProfile(true);
                // if checking for a public profile
                else {
                    // check user exists
                    const profileResponse = await getUserProfileByUsername(match.params.username);
                    // set profile or null - set to PublicProfile
                    setRequestedProfile(profileResponse);
                    setIsPrivateProfile(false)
                }

                setIsLoading(false);
            })();
        }
        else setIsLoading(false);
    }, [props.match.params])

    // return Loader if not yet ready
    // redirect if no profile found, otherwise show private or public profile
    if (isLoading) return <Loader />;
    else if (isPrivateProfile) return <PrivateProfile user={props.user} />;
    else if (!requestedProfile) return <Redirect to="/page-not-found" />;
    else return <PublicProfile user={props.user} profile={requestedProfile} />;
};

export default Profile;