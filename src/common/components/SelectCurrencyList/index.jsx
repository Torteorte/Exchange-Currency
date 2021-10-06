import React from 'react';
import { neededCurrency } from '../../utils/utils';

const SelectCurrencyList = () => {
  const selectCurrencyList = neededCurrency.map((obj) => (
    <option key={obj.id} value={obj.name}>
      {obj.name}
    </option>
  ));

  return <>{selectCurrencyList}</>;
};

export default SelectCurrencyList;
