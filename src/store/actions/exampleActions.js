import * as actionTypes from './actionTypes';
import * as services from '../../services/exampleService';

export const exampleAction = (data) => {
    return async dispatch => {
        const response = await services.exampleService(data);
        dispatch({
            type: actionTypes.EXAMPLE_TYPE,
            payload: response
        });
    };
};