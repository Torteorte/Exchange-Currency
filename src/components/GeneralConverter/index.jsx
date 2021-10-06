import React, { Fragment } from 'react';
import { setCurrency } from './thunk';
import { useSelector, useDispatch } from 'react-redux';

import { SelectCurrency } from './SelectCurrency/SelectCurrency';
import { ExchangeTable } from './ExchangeTable/ExchangeTable';
import { ChangePage } from '../../common/components/ChangePage';

export const GeneralConverter = () => {
  const dispatch = useDispatch();
  const { selectedCurrency } = useSelector(
    ({ currencyReducer }) => currencyReducer
  );

  React.useEffect(() => {
    dispatch(setCurrency(selectedCurrency));
  }, [dispatch, selectedCurrency]);

  return (
    <Fragment>
      <SelectCurrency />
      <ExchangeTable />
      <ChangePage
        text={'Подробный конвертер'}
        destination={'/currency/detail'}
      />
    </Fragment>
  );
};
