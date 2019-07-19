import React from 'react';
import currencies from '../../utils/currencies';

const CurrencySelector = ({ name, selected, handler }) => (
  <select name={name} selected={selected} onChange={handler}>
    <option value={currencies.EUR.shortcut}>{currencies.EUR.name}</option>
    <option value={currencies.USD.shortcut}>{currencies.USD.name}</option>
    <option value={currencies.GBP.shortcut}>{currencies.GBP.name}</option>
  </select>
);

export default CurrencySelector;
