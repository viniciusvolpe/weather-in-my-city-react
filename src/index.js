import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';

import weatherReducer from './reducers/WeatherReducer'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(weatherReducer, applyMiddleware(thunkMiddleware));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));