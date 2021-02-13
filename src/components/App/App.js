import React, { Component } from 'react';
import firebase from '../../config/firebase';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { signInUser } from '../../store/actions/authActions';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Loader from '../App/Loader';
import Nav from '../Nav/Nav';
import Profile from '../Profile/Profile';
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

    componentWillUnmount() {
        // clean up actions
    }

    render() {
        return this.props.user
            ? (
                <>
                    <Nav user={this.props.user} />
                    <main className="uk-container uk-margin uk-margin-large-bottom" data-uk-height-viewport="expand: true">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/profile/:username" exact component={props => <Profile {...props} user={this.props.user} />} />
                            <Route path="*" component={_404} />
                        </Switch>
                    </main>
                    <Footer />
                </>
            )
            : <Loader />;
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

export default connect(mapStateToProps, mapDispatchToProps)(App);