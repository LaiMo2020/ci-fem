import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import Store from './store';
import { Provider } from 'react-redux';

import "./styles/main.scss";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
