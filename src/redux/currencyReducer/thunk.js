import { setCurrencyAC, setLoaded } from './action';
import { currencyAPI } from '../../api/api';

export const setCurrency = (selectCurrency) => async (dispatch) => {
  dispatch(setLoaded(false));
  let response = await currencyAPI.getCurrencyList(selectCurrency);
  dispatch(setCurrencyAC(response.data.conversion_rates));
};
