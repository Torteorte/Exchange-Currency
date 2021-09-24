import { SELECT_CURRENCY, SET_CURRENCY_ITEMS, SET_LOADED } from './types';

let initialState = {
  actualCurrencyList: [],
  selectedCurrency: localStorage.getItem('currency') || 'UAH',
  isLoaded: false,
  neededCurrency: [
    { id: 1, name: 'UAH' },
    { id: 2, name: 'USD' },
    { id: 3, name: 'EUR' },
    { id: 4, name: 'PLN' },
    { id: 5, name: 'RUB' },
    { id: 6, name: 'BYN' },
    { id: 7, name: 'GBP' },
    { id: 8, name: 'ILS' },
    { id: 9, name: 'CNY' },
    { id: 10, name: 'JPY' }
  ]
};

let currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CURRENCY:
      localStorage.setItem('currency', action.payload);
      return {
        ...state,
        selectedCurrency: localStorage.getItem('currency')
      };

    case SET_CURRENCY_ITEMS:
      return {
        ...state,
        actualCurrencyList: action.payload,
        isLoaded: true
      };

    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload
      };

    default:
      return state;
  }
};

export default currencyReducer;
