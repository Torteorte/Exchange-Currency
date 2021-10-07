import { StyledForm, StyledSelect } from './styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrencyAC } from '../action';

import SelectCurrencyList from '../../../common/components/SelectCurrencyList';
import { useTranslation } from 'react-i18next';

export const SelectCurrency = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { selectedCurrency } = useSelector(
    ({ currencyReducer }) => currencyReducer
  );

  const updateCurrency = (e) => {
    const { value } = e.target;
    dispatch(changeCurrencyAC(value));
  };

  return (
    <StyledForm>
      <label htmlFor="currency">{t('select')}</label>
      <StyledSelect
        name="currency"
        id="currency"
        onChange={updateCurrency}
        value={selectedCurrency}
      >
        <SelectCurrencyList />
      </StyledSelect>
    </StyledForm>
  );
};
