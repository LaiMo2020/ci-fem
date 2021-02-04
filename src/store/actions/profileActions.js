import * as actionTypes from './actionTypes';
import * as profileService from '../../services/profileService';

export const getUserProfile = uid => {
    return async dispatch => {
        const response = await profileService.getUserProfile(uid);
        dispatch({
            type: actionTypes.GET_USER_PROFILE,
            payload: response
        });
    };
};