import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';

import currencyReducer from '../components/GeneralConverter/reducer';
import pairConversion from '../components/DetailedConverter/reducer';

let reducers = combineReducers({
  currencyReducer,
  pairConversion
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
