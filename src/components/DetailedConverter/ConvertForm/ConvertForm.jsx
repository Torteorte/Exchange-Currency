import { StyledForm } from './styled';
import React from 'react';
import { setPairExchange } from '../thunk';
import { useDispatch, useSelector } from 'react-redux';

import { GetSelect } from './Selects/GetSelect';
import { ChangingSelect } from './Selects/ChangingSelect';

export const ConvertForm = () => {
  const dispatch = useDispatch();
  const {
    pairConversion: { getCurrency },
    currencyReducer: { selectedCurrency }
  } = useSelector((store) => store);

  React.useEffect(() => {
    dispatch(setPairExchange(selectedCurrency, getCurrency));
  }, [dispatch, selectedCurrency, getCurrency]);

  return (
    <StyledForm>
      <ChangingSelect />
      <GetSelect />
    </StyledForm>
  );
};
