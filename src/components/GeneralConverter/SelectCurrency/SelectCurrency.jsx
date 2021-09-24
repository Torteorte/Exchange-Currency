import React from 'react';

import SelectCurrencyList from '../../../common/components/SelectCurrencyList';
import { StyledForm, StyledSelect } from './styled';

const SelectCurrency = (props) => {
  const updateCurrency = (e) => {
    const { value } = e.target;
    props.handleUpdateCurrency(value);
  };

  return (
    <StyledForm>
      <label htmlFor="currency">Выберите валюту</label>
      <StyledSelect
        name="currency"
        id="currency"
        onChange={updateCurrency}
        value={props.valueSelect}
      >
        <SelectCurrencyList />
      </StyledSelect>
    </StyledForm>
  );
};

export default SelectCurrency;
