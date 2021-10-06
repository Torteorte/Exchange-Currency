import { setCurrencyAC, setLoaded } from './action';
import { currencyAPI } from '../../api/api';
import { neededCurrency } from '../../common/utils/utils';

export const setCurrency = (selectCurrency) => async (dispatch) => {
  dispatch(setLoaded(false));
  const response = await currencyAPI.getCurrencyList(selectCurrency);

  const conversionRatesArray = response.data.conversion_rates;
  const resultConversionRatesArray = Object.entries(conversionRatesArray)
    .filter((item) => neededCurrency.map((obj) => obj.name).includes(item[0]))
    .sort();

  dispatch(setCurrencyAC(resultConversionRatesArray));
};
