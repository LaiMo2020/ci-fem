import React, { Component } from 'react';
import firebase from '../../config/firebase';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { signInUser } from '../../store/actions/authActions';
import Testing from '../Testing/Testing';
import _404 from '../Errors/_404';
import './styles/App.scss';

class App extends Component {

    componentDidMount() {
        firebase
            .auth()
            .onAuthStateChanged(firebaseUserData => {
                if (firebaseUserData) {
                    firebase
                        .auth()
                        .getRedirectResult()
                        .then(githubUserData => {
                            this.props.signInUser(firebaseUserData, githubUserData)
                        });
                }
            });
    };

    render() {
        return (
            <>
                <Switch>
                    <Route path="/" exact render={() => <Testing user={this.props.user} />} />
                    <Route path="*" component={_404} />
                </Switch>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    signInUser
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));