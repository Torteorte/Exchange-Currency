import { SELECT_CURRENCY, SET_CURRENCY_ITEMS, SET_LOADED } from './types';

export const changeCurrencyAC = (currency) => ({
  type: SELECT_CURRENCY,
  payload: { currency }
});

export const setCurrencyAC = (items) => ({
  type: SET_CURRENCY_ITEMS,
  payload: { items }
});

export const setLoaded = (payload) => ({ type: SET_LOADED, payload });
