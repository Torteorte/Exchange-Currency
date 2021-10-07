import {
  StyledContainer,
  StyledInput,
  StyledLabel,
  StyledSelect
} from './styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { updateChangingInputAC } from '../../action';
import { changeCurrencyAC } from '../../../GeneralConverter/action';
import { excludesKeysForInput } from '../../../../common/utils/utils';

import SelectCurrencyList from '../../../../common/components/SelectCurrencyList';

export const ChangingSelect = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    currencyReducer: { selectedCurrency, changingInput }
  } = useSelector((store) => store);

  const changingCurrency = (e) => {
    const { value } = e.target;
    dispatch(changeCurrencyAC(value));
  };

  const onChangingInput = (e) => {
    const { value } = e.target;
    dispatch(updateChangingInputAC(value));
  };

  return (
    <StyledContainer>
      <StyledLabel htmlFor="changing">{t('detailed.changing')}</StyledLabel>
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
        value={changingInput}
        onChange={onChangingInput}
        onKeyPress={excludesKeysForInput}
      />
    </StyledContainer>
  );
};
