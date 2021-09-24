import React from 'react';

import LoadCurrency from '../../../common/components/LoadCurrency';
import { StyledTable, StyledTd, StyledTh, StyledTr } from './styled';

const ExchangeTable = (props) => {
  const resultArrayMoney = Object.entries(props.currencyList)
    .filter((item) =>
      props.neededCurrency.map((obj) => obj.name).includes(item[0])
    )
    .sort();

  const listMoneyItems = resultArrayMoney.map((obj) => (
    <StyledTr key={obj[0]}>
      <StyledTd>{obj[0]}</StyledTd>
      <StyledTd>{obj[1]}</StyledTd>
    </StyledTr>
  ));

  return (
    <StyledTable>
      <tbody>
        <StyledTr>
          <StyledTh>Валюта</StyledTh>
          <StyledTh>Курс</StyledTh>
        </StyledTr>
        {props.isLoaded
          ? listMoneyItems
          : Array(10)
              .fill(0)
              .map((_, index) => <LoadCurrency key={index} />)}
      </tbody>
    </StyledTable>
  );
};

export default ExchangeTable;
