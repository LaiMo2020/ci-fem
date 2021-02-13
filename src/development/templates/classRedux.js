import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClassRedux extends Component {
    render() {
        return (
            <div>
                ClassRedux
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {};
};

export default connect(null, null)(ClassRedux);