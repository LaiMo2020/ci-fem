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