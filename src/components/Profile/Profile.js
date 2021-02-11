import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { getUserProfileByUsername } from '../../services/profileService';
import BaseProfile from './BaseProfile';
import Loader from '../App/Loader';
import './styles/Profile.scss';

const Profile = (props) => {
    const [isPrivateProfile, setIsPrivateProfile] = useState(null);
    const [requestedProfile, setRequestedProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const isMounted = useRef(null);

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
    // redirect if no profile found, return profile component
    if (isLoading) return <Loader />;
    else if (!isPrivateProfile && !requestedProfile) return <Redirect to="/page-not-found" />;
    else return <BaseProfile user={props.user} requestedProfile={requestedProfile} isPrivateProfile={isPrivateProfile} />;
};

export default Profile;