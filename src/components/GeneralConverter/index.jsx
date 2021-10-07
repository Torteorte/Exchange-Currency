import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { asyncSetCurrency } from './action';
import { useSelector, useDispatch } from 'react-redux';

import { SelectCurrency } from './SelectCurrency/SelectCurrency';
import { ExchangeTable } from './ExchangeTable/ExchangeTable';
import { ChangePage } from '../../common/components/ChangePage';

export const GeneralConverter = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { selectedCurrency } = useSelector(
    ({ currencyReducer }) => currencyReducer
  );

  React.useEffect(() => {
    dispatch(asyncSetCurrency(selectedCurrency));
  }, [dispatch, selectedCurrency]);

  return (
    <Fragment>
      <SelectCurrency />
      <ExchangeTable />
      <ChangePage
        text={t('button.detailed')}
        destination={'/currency/detail'}
      />
    </Fragment>
  );
};
