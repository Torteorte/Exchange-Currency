import { StyledForm } from './styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPairExchange } from '../thunk';
import { changeCurrencyAC } from '../../GeneralConverter/action';
import { getCurrencyAC, getInputAC, updateChangingInputAC } from '../action';

import { GetSelect } from './Selects/GetSelect';
import { ChangingSelect } from './Selects/ChangingSelect';

export const ConvertForm = () => {
  const dispatch = useDispatch();
  const {
    pairConversion: { pairExchange, getCurrency, changingInput, getInput },
    currencyReducer: { selectedCurrency }
  } = useSelector((store) => store);

  const handlerChangingCurrency = (currency) => {
    dispatch(changeCurrencyAC(currency));
  };

  const handlerGetCurrency = (getItem) => {
    dispatch(getCurrencyAC(getItem));
  };

  const onChangingInputAC = (numberChange) => {
    dispatch(updateChangingInputAC(numberChange));
  };

  const onGetInputAC = (numberGet) => {
    dispatch(getInputAC(numberGet));
  };

  React.useEffect(() => {
    dispatch(setPairExchange(selectedCurrency, getCurrency));
  }, [dispatch, selectedCurrency, getCurrency]);

  return (
    <StyledForm>
      <ChangingSelect
        changingCurrency={handlerChangingCurrency}
        changingInput={changingInput}
        onChangingInput={onChangingInputAC}
        pairExchange={pairExchange}
      />
      <GetSelect
        getCurrency={handlerGetCurrency}
        getInput={getInput}
        onGetInput={onGetInputAC}
        pairExchange={pairExchange}
      />
    </StyledForm>
  );
};
