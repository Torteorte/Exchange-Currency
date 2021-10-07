import {
  StyledContainer,
  StyledInput,
  StyledLabel,
  StyledSelect
} from './styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencyAC, getInputAC } from '../../action';
import { excludesKeysForInput } from '../../../../common/utils/utils';

import SelectCurrencyList from '../../../../common/components/SelectCurrencyList';

export const GetSelect = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    pairConversion: { getCurrency, getInput }
  } = useSelector((store) => store);

  const onGetCurrency = (e) => {
    const { value } = e.target;
    dispatch(getCurrencyAC(value));
  };

  const onGetInput = (e) => {
    const { value } = e.target;
    dispatch(getInputAC(value));
  };

  return (
    <StyledContainer>
      <StyledLabel htmlFor="get">{t('detailed.get')}</StyledLabel>
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
        value={getInput}
        onChange={onGetInput}
        onKeyPress={excludesKeysForInput}
      />
    </StyledContainer>
  );
};
