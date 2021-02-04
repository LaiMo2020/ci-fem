import React from 'react';
import firebase from '../../config/firebase';
import { connect } from 'react-redux';
import { signOutUser } from '../../store/actions/authActions';

const SignOut = (props) => {

    const handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => props.signOutUser(props.user))
    }

    return <li className="has-pointer" onClick={handleSignOut}>Sign out</li>;
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