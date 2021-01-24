import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Example from '../Example/Example';
import './styles/App.scss';

class App extends Component {
    render () {
        return (
            <>
                <Switch>
                    <Route path="/" exact component={Example} />
                </Switch>
            </>
        );
    };
};

export default withRouter(connect(null, null)(App));
