import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';

const reducers = combineReducers({
    user: userReducer
});

export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)),
);