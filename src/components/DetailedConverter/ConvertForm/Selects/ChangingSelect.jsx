import React from 'react';
import { useSelector } from 'react-redux';

import SelectCurrencyList from '../../../../common/components/SelectCurrencyList';
import { excludesKeysForInput } from '../../../../common/utils/utils';
import {
  StyledContainer,
  StyledInput,
  StyledLabel,
  StyledSelect
} from './styled';

const ChangingSelect = (props) => {
  const {
    currencyReducer: { selectedCurrency }
  } = useSelector((store) => store);

  const changingCurrency = (e) => {
    let { value } = e.target;
    props.changingCurrency(value);
  };

  const onChangingInput = (e) => {
    let { value } = e.target;
    props.onChangingInput(value);
  };

  return (
    <StyledContainer>
      <StyledLabel htmlFor="changing">Меняю:</StyledLabel>
      <StyledSelect
        name="currencyChanging"
        id="currencyChanging"
        onChange={changingCurrency}
        value={selectedCurrency}
      >
        <SelectCurrencyList />
      </StyledSelect>
      <StyledInput
        type="number"
        name="changing"
        min="0"
        value={props.changingInput}
        onChange={onChangingInput}
        onKeyPress={excludesKeysForInput}
      />
    </StyledContainer>
  );
};

export default ChangingSelect;
