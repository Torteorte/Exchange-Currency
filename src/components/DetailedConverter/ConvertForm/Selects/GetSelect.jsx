import {
  StyledContainer,
  StyledInput,
  StyledLabel,
  StyledSelect
} from './styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { excludesKeysForInput } from '../../../../common/utils/utils';

import SelectCurrencyList from '../../../../common/components/SelectCurrencyList';

export const GetSelect = (props) => {
  const {
    pairConversion: { getCurrency }
  } = useSelector((store) => store);

  const onGetCurrency = (e) => {
    let { value } = e.target;
    props.getCurrency(value);
  };

  const onGetInput = (e) => {
    let { value } = e.target;
    props.onGetInput(value);
  };

  return (
    <StyledContainer>
      <StyledLabel htmlFor="get">Получаю:</StyledLabel>
      <StyledSelect
        name="currencyGet"
        id="currencyGet"
        onChange={onGetCurrency}
        value={getCurrency}
      >
        <SelectCurrencyList />
      </StyledSelect>
      <StyledInput
        type="number"
        name="get"
        min="0"
        value={props.getInput}
        onChange={onGetInput}
        onKeyPress={excludesKeysForInput}
      />
    </StyledContainer>
  );
};
