import React from 'react';
import firebase from '../../config/firebase';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../store/actions/authActions';

const SignOut = (props) => {

    const handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => props.signOutUser(props.user))
    }

    return (
        <li
            className="has-pointer"
            onClick={handleSignOut}
            data-uk-toggle={props.viewType.includes('mobile') ? 'target: #off-canvas-nav' : ''}
        >
            <Link to="/">
                <span data-uk-icon="sign-out" />
                <span className="uk-align-right">Sign Out</span>
            </Link>
        </li>
    )
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = {
    signOutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);