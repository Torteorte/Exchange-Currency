import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SelectCurrency from './SelectCurrency/SelectCurrency';
import ExchangeTable from './ExchangeTable/ExchangeTable';
import ChangePage from '../../common/components/ChangePage';

import { changeCurrencyAC } from '../../redux/currencyReducer/action';
import { setCurrency } from '../../redux/currencyReducer/thunk';

const GeneralConverter = () => {
  const dispatch = useDispatch();
  const { actualCurrencyList, selectedCurrency, isLoaded, neededCurrency } =
    useSelector(({ currencyReducer }) => currencyReducer);

  const handleUpdateCurrency = (item) => {
    dispatch(changeCurrencyAC(item));
  };

  React.useEffect(() => {
    dispatch(setCurrency(selectedCurrency));
  }, [dispatch, selectedCurrency]);

  return (
    <Fragment>
      <SelectCurrency
        handleUpdateCurrency={handleUpdateCurrency}
        valueSelect={selectedCurrency}
      />
      <ExchangeTable
        currencyList={actualCurrencyList}
        isLoaded={isLoaded}
        neededCurrency={neededCurrency}
      />
      <ChangePage
        text={'Подробный конвертер'}
        destination={'/currency/detail'}
      />
    </Fragment>
  );
};

export default GeneralConverter;
