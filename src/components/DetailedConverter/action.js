import {
  SAGA_SET_PAIR_EXCHANGE,
  SELECT_CURRENCY_GET,
  SET_INPUT_CHANGING,
  SET_INPUT_GET,
  SET_PAIR_EXCHANGE
} from './types';

export const getCurrencyAC = (getItemCurrency) => ({
  type: SELECT_CURRENCY_GET,
  payload: { getItemCurrency }
});

export const setPairExchangeAC = (items) => ({
  type: SET_PAIR_EXCHANGE,
  payload: { items }
});

export const updateChangingInputAC = (numberChange) => ({
  type: SET_INPUT_CHANGING,
  payload: { numberChange }
});

export const getInputAC = (numberGet) => ({
  type: SET_INPUT_GET,
  payload: { numberGet }
});

export const asyncSetPairExchange = (itemSelect, itemGet) => ({
  type: SAGA_SET_PAIR_EXCHANGE,
  payload: { itemSelect, itemGet }
});
