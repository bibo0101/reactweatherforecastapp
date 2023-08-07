// src/redux/index.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './reducer';

const store = createStore(weatherReducer, applyMiddleware(thunk));

export default store;
