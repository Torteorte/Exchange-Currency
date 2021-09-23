import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import currencyReducer from './currency_reducer'
import pairConversion from './pairConversion_reducer'

import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    currencyReducer,
    pairConversion
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store

export default store;