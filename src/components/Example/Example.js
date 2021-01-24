import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { exampleAction } from '../../store/actions/exampleActions';

const Example = ({ example, exampleAction }) => {
    const [text, setText] = useState("default local text");

    // component will mount
    useEffect(() => {

        // component will unmount
        return () => { };
    });

    // example state change
    const changeLocalState = () => {
        setText("Changed Local State!");
    };

    const changeReduxState = () => {
        exampleAction("Changed Redux State!");
    };

    // return jsx if example data is ready other return a loading message / animation
    return example
        ? (
            <div>
                <p>{text}</p>
                <button onClick={changeLocalState}>change local state</button>
                <br />
                <p>{example.data}</p>
                <button onClick={changeReduxState}>change redux state</button>
            </div>
        )
        : <div>loading ...</div>;
};

// get data from the redux store 
const mapStateToProps = state => {
    return {
        example: state.example
    };
};

export default connect(mapStateToProps, { exampleAction })(Example);