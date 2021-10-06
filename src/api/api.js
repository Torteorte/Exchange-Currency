import * as axios from 'axios';

const { REACT_APP_API_KEY } = process.env;

const instance = axios.create({
  baseURL: `https://v6.exchangerate-api.com/v6`
});

export const currencyAPI = {
  getCurrencyList(currency) {
    return instance.get(`/${REACT_APP_API_KEY}/latest/${currency}`);
  },
  getCurrencyPair(selectedCurrency, getCurrency) {
    return instance.get(
      `/${REACT_APP_API_KEY}/pair/${selectedCurrency}/${getCurrency}`
    );
  }
};
