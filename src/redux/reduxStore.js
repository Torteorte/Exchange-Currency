import { rootSaga } from './sagas';
import createSagaMiddleware from 'redux-saga';
import currencyReducer from '../components/GeneralConverter/reducer';
import pairConversion from '../components/DetailedConverter/reducer';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';

const sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
  currencyReducer,
  pairConversion
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
