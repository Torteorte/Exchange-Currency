import {
  SELECT_CURRENCY,
  SET_CURRENCY_ITEMS,
  SET_LOADED,
  SAGA_SET_CURRENCY_ITEMS
} from './types';

export const changeCurrencyAC = (currency) => ({
  type: SELECT_CURRENCY,
  payload: { currency }
});

export const setCurrencyAC = (items) => ({
  type: SET_CURRENCY_ITEMS,
  payload: { items }
});

export const setLoaded = (bool) => ({ type: SET_LOADED, payload: { bool } });

export const asyncSetCurrency = (item) => ({
  type: SAGA_SET_CURRENCY_ITEMS,
  payload: { item }
});
