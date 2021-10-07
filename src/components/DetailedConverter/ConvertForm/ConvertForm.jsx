import { StyledForm } from './styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSetPairExchange } from '../action';

import { GetSelect } from './Selects/GetSelect';
import { ChangingSelect } from './Selects/ChangingSelect';

export const ConvertForm = () => {
  const dispatch = useDispatch();
  const {
    pairConversion: { getCurrency },
    currencyReducer: { selectedCurrency }
  } = useSelector((store) => store);
  //
  React.useEffect(() => {
    dispatch(asyncSetPairExchange(selectedCurrency, getCurrency));
  }, [dispatch, selectedCurrency, getCurrency]);

  return (
    <StyledForm>
      <ChangingSelect />
      <GetSelect />
    </StyledForm>
  );
};
