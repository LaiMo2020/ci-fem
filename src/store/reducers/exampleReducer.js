import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: "default redux text"
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EXAMPLE_TYPE:
            return {...state, data: action.payload};
        default:
            return state;
    };
};