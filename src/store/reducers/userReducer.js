import * as actionTypes from '../actions/actionTypes';

const initialState = {
    profile: null,
    isAuth: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN_USER:
            return { ...state, profile: action.payload.profile, isAuth:  action.payload.isAuth };
        case actionTypes.SIGN_OUT_USER:
            return { ...state, profile: action.payload.profile, isAuth:  action.payload.isAuth };
        case actionTypes.GET_USER_PROFILE:
            return { ...state, profile: action.payload.profile }
        default:
            return state;
    };
};