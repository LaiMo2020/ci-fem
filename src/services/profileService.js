import firebase from '../config/firebase';

const firestore = firebase.firestore();
const users = firestore.collection('users');

export const getUserProfile = async uid => {
    return await users
        .doc(uid)
        .get()
        .then(doc => doc.exists ? doc.data() : null)
        .catch(error => null);
};

export const getUserProfileByUsername = async username => {
    return await users
        .where('username', '==', username)
        .get()
        .then(doc => !doc.empty ? doc.docs[0].data() : null)
        .catch(error => null)
};