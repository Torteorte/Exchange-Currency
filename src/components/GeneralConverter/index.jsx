import React, { Fragment } from 'react';
import { setCurrency } from './thunk';
import { useSelector, useDispatch } from 'react-redux';

import { SelectCurrency } from './SelectCurrency/SelectCurrency';
import { ExchangeTable } from './ExchangeTable/ExchangeTable';
import { ChangePage } from '../../common/components/ChangePage';
import { useTranslation } from 'react-i18next';

export const GeneralConverter = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
        text={t('button.detailed')}
        destination={'/currency/detail'}
      />
    </Fragment>
  );
};
