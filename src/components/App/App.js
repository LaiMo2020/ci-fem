import React, { Component } from 'react';
import firebase from '../../config/firebase';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './styles/App.scss';
import { signInUser } from '../../store/actions/authActions';
import Nav from '../Nav/BaseNav';
import Home from '../Home/Home';
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
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="*" component={_404} />
                </Switch>
                <Footer />
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