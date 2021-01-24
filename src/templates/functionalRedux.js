import React from 'react';
import { connect } from 'react-redux';

const FunctionalRedux= () => {
    return (
        <div>
            FunctionalRedux
        </div>
    );
};

const mapStateToProps = state => {
    return { };
};

export default connect(null, null)(FunctionalRedux);