import { setPairExchangeAC } from './action';
import { currencyAPI } from '../../api/api';

export const setPairExchange =
  (selectedCurrency, getCurrency) => async (dispatch) => {
    const response = await currencyAPI.getCurrencyPair(
      selectedCurrency,
      getCurrency
    );
    dispatch(setPairExchangeAC(response.data.conversion_rate));
  };
