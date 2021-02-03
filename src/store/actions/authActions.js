import * as actionTypes from './actionTypes';
import * as authService from '../../services/authService';

export const signInUser = (firebaseUserData, githubUserData) => {
    return async dispatch => {
        const response = await authService.signInUser(firebaseUserData, githubUserData);
        dispatch({
            type: actionTypes.SIGN_IN_USER,
            payload: response
        });
    };
};

export const signOutUser = (user) => {
    return async dispatch => {
        const response = await authService.signOutUser(user);
        dispatch({
            type: actionTypes.SIGN_OUT_USER,
            payload: response
        });
    };
};