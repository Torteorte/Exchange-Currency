import React from 'react';

import { useSelector } from 'react-redux';

const SelectCurrencyList = () => {
  const neededCurrency = useSelector(
    ({ currencyReducer }) => currencyReducer.neededCurrency
  );

  const selectCurrencyList = neededCurrency.map((obj) => (
    <option key={obj.id} value={obj.name}>
      {obj.name}
    </option>
  ));

  return <>{selectCurrencyList}</>;
};

export default SelectCurrencyList;
