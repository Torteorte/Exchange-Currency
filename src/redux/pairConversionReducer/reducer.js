import {
  SELECT_CURRENCY_GET,
  SET_PAIR_EXCHANGE,
  SET_INPUT_CHANGING,
  SET_INPUT_GET
} from './types';

let initialState = {
  pairExchange: 0,
  getCurrency: localStorage.getItem('getCurrency') || 'UAH',
  changingInput: 0,
  getInput: 0
};

let pairConversionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CURRENCY_GET:
      localStorage.setItem('getCurrency', action.payload);
      return {
        ...state,
        getCurrency: localStorage.getItem('getCurrency')
      };

    case SET_PAIR_EXCHANGE:
      return {
        ...state,
        pairExchange: action.payload,
        getInput: state.changingInput * action.payload
      };

    case SET_INPUT_CHANGING:
      return {
        ...state,
        changingInput: action.payload,
        getInput: action.payload * state.pairExchange
      };

    case SET_INPUT_GET:
      return {
        ...state,
        changingInput: action.payload / state.pairExchange,
        getInput: action.payload
      };

    default:
      return state;
  }
};

export default pairConversionReducer;
