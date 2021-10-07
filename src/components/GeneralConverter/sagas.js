import { SAGA_SET_CURRENCY_ITEMS } from './types';
import { currencyAPI } from '../../api/api';
import { takeEvery, put } from 'redux-saga/effects';
import { setLoaded, setCurrencyAC } from './action';
import { neededCurrency } from '../../common/utils/utils';

function* setCurrency(action) {
  yield put(setLoaded(false));
  const response = yield currencyAPI.getCurrencyList(action.payload.item);

  const conversionRatesArray = response.data.conversion_rates;
  const resultConversionRatesArray = Object.entries(conversionRatesArray)
    .filter((item) => neededCurrency.map((obj) => obj.name).includes(item[0]))
    .sort();

  yield put(setCurrencyAC(resultConversionRatesArray));
}

export function* generalConverterSaga() {
  yield takeEvery(SAGA_SET_CURRENCY_ITEMS, setCurrency);
}
