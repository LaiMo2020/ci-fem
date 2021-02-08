import React from 'react';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';
import './styles/Auth.scss';

const SignIn = ({ viewType }) => {

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

    return viewType.includes('desktop')
        ? (
            <button
                id="github-login-button"
                className="uk-button uk-button-small uk-button-secondary"
                onClick={handleSignIn}
            >
                Sign in with Github
                <span id="github-login-icon" data-uk-icon="icon: github" />
            </button>
        )
        : (
            <li onClick={handleSignIn} data-uk-toggle="target: #off-canvas-nav">
                <Link to="/">
                    <span data-uk-icon="github" />
                    <span className="uk-align-right">Sign In with Github</span>
                </Link>
            </li>
        )
};

export default SignIn;