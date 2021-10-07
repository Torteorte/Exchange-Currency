import { takeEvery, put } from 'redux-saga/effects';
import { SAGA_SET_PAIR_EXCHANGE } from './types';
import { setPairExchangeAC } from './action';
import { currencyAPI } from '../../api/api';

export function* setPairExchange(action) {
  const response = yield currencyAPI.getCurrencyPair(
    action.payload.itemSelect,
    action.payload.itemGet
  );
  yield put(setPairExchangeAC(response.data.conversion_rate));
}

export function* detailedConverterSaga() {
  yield takeEvery(SAGA_SET_PAIR_EXCHANGE, setPairExchange);
}
