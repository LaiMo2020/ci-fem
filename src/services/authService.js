import firebase from '../config/firebase';
import { getUserProfile } from "./profileService";
import { createProfile, updateProfile } from "../utils/profileHelpers";

const firestore = firebase.firestore();
const users = firestore.collection('users');

export const signInUser = async (firebaseUserData, githubUserData) => {

    try {
        let profile = {};
        const uid = firebaseUserData.uid;
        const dataExists = githubUserData.hasOwnProperty('additionalUserInfo');
        const isNewUser = githubUserData?.additionalUserInfo?.isNewUser;

        // new user
        if (dataExists && isNewUser) {
            profile = createProfile(githubUserData);
            await users.doc(uid).set(profile);
        }

        // existing user
        else {
            // get firebase profile
            profile = await getUserProfile(uid);
            if (!profile) return { profile: null, isAuth: false };

            // resigning in
            if (dataExists && !isNewUser) {
                profile = updateProfile(githubUserData, profile);
                await users.doc(uid).set(profile);
            }

            // page refreshed - no github data
            return { profile, isAuth: true };
        }

        // persist user to redux
        return { profile, isAuth: true };
    }
    catch (error) {
        console.log(error.code, error.message);
        return { profile: null, isAuth: false };
    }
};

export const signOutUser = async user => {
    try {
        await users.doc(user.profile.uid).update({ isOnline: false });
    }
    catch (error) {
        console.log(error.code, error.message);
    }
    finally {
        return { profile: null, isAuth: false };
    }
};
