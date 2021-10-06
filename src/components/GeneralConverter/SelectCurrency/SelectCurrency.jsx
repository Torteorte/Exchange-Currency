import { StyledForm, StyledSelect } from './styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrencyAC } from '../action';

import SelectCurrencyList from '../../../common/components/SelectCurrencyList';

export const SelectCurrency = () => {
  const dispatch = useDispatch();
  const { selectedCurrency } = useSelector(
    ({ currencyReducer }) => currencyReducer
  );

  const updateCurrency = (e) => {
    const { value } = e.target;
    dispatch(changeCurrencyAC(value));
  };

  return (
    <StyledForm>
      <label htmlFor="currency">Выберите валюту</label>
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
