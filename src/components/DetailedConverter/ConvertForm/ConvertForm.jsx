import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import GetSelect from './Selects/GetSelect';
import ChangingSelect from './Selects/ChangingSelect';

import { changeCurrencyAC } from '../../../redux/currencyReducer/action';
import {
  getCurrencyAC,
  getInputAC,
  updateChangingInputAC
} from '../../../redux/pairConversionReducer/action';
import { setPairExchange } from '../../../redux/pairConversionReducer/thunk';

const StyledForm = styled.form`
  margin: 20px auto 10px;
`;

const DetailedConverter = () => {
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

export default DetailedConverter;
