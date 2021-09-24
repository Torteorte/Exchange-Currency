import {
  SELECT_CURRENCY_GET,
  SET_INPUT_CHANGING,
  SET_INPUT_GET,
  SET_PAIR_EXCHANGE
} from './types';

export const getCurrencyAC = (getItem) => ({
  type: SELECT_CURRENCY_GET,
  payload: getItem
});

export const setPairExchangeAC = (items) => ({
  type: SET_PAIR_EXCHANGE,
  payload: items
});

export const updateChangingInputAC = (numberChange) => ({
  type: SET_INPUT_CHANGING,
  payload: numberChange
});

export const getInputAC = (numberGet) => ({
  type: SET_INPUT_GET,
  payload: numberGet
});
