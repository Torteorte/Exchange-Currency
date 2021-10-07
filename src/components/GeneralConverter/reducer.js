import { SELECT_CURRENCY, SET_CURRENCY_ITEMS, SET_LOADED } from './types';

let initialState = {
  actualCurrencyList: [],
  selectedCurrency: localStorage.getItem('currency') || 'UAH',
  isLoaded: false
};

let currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CURRENCY:
      localStorage.setItem('currency', action.payload.currency);
      return {
        ...state,
        selectedCurrency: action.payload.currency
      };

    case SET_CURRENCY_ITEMS:
      return {
        ...state,
        actualCurrencyList: action.payload.items,
        isLoaded: true
      };

    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload.bool
      };

    default:
      return state;
  }
};

export default currencyReducer;
