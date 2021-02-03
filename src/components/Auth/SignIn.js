import React from 'react';
import firebase from '../../config/firebase';

const SignIn = () => {

    const handleSignIn = () => {
        const provider = new firebase.auth.GithubAuthProvider();
        provider.addScope('read:user');

        firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {

                firebase
                    .auth()
                    .signInWithRedirect(provider)
                    .catch(error => console.log(error.code, error.message));

            });
    };

    return <button onClick={handleSignIn}>Sign in with Github</button>;
}

export default SignIn;