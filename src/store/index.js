import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import exampleReducer from './reducers/exampleReducer';

const reducers = combineReducers({
    example: exampleReducer
});

export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)),
);