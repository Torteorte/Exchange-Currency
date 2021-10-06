import {
  StyledLink,
  StyledTable,
  StyledTd,
  StyledTh,
  StyledTr
} from './styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrencyAC } from '../action';
import { ROUTES } from '../../../common/constants/routes';

import LoadCurrency from '../../../common/components/LoadCurrency';

export const ExchangeTable = () => {
  const dispatch = useDispatch();
  const { actualCurrencyList, isLoaded } = useSelector(
    ({ currencyReducer }) => currencyReducer
  );

  return (
    <StyledTable>
      <tbody>
        <StyledTr>
          <StyledTh>Валюта</StyledTh>
          <StyledTh>Курс</StyledTh>
        </StyledTr>
        {isLoaded
          ? actualCurrencyList.map((obj) => (
              <StyledTr key={obj[0]}>
                <StyledTd>
                  <StyledLink
                    to={ROUTES.detail}
                    onClick={() => {
                      dispatch(changeCurrencyAC(obj[0]));
                    }}
                  >
                    {obj[0]}
                  </StyledLink>
                </StyledTd>
                <StyledTd>{obj[1]}</StyledTd>
              </StyledTr>
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => <LoadCurrency key={index} />)}
      </tbody>
    </StyledTable>
  );
};
