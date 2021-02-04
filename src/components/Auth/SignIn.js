import React from 'react';
import firebase from '../../config/firebase';
import './styles/Auth.scss';

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

    return (
        <button
            id="github-login-button"
            className="uk-button uk-button-small uk-button-secondary"
            onClick={handleSignIn}
        >
            Sign in with Github
            <span id="github-login-icon" data-uk-icon="icon: github" />
        </button>
    );
};

export default SignIn;