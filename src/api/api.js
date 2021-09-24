import * as axios from 'axios';

const API_KEY = '17e0d61631e1748a100b5104';

const instance = axios.create({
  baseURL: `https://v6.exchangerate-api.com/v6`
});

export const currencyAPI = {
  getCurrencyList(currency) {
    return instance.get(`/${API_KEY}/latest/${currency}`);
  },
  getCurrencyPair(selectedCurrency, getCurrency) {
    return instance.get(`/${API_KEY}/pair/${selectedCurrency}/${getCurrency}`);
  }
};
