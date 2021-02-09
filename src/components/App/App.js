import React, { Component } from 'react';
import firebase from '../../config/firebase';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { signInUser } from '../../store/actions/authActions';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Nav from '../Nav/BaseNav';
import _404 from '../Errors/_404';

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

    componentWillUnmount() {
        // clean up actions
    }

    render() {
        return (
            <>
                <Nav user={this.props.user} />
                <Footer />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="*" component={_404} />
                </Switch>
            </>
        );
    };
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