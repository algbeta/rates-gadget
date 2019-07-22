import React from 'react';
import PropTypes from 'prop-types';
import currencies from '../../utils/currencies';

const CurrencySelector = ({ name, selected, handler }) => (
  <select name={name} selected={selected} onChange={handler}>
    {Object.keys(currencies).map(key => (
      <option
        value={currencies[key].shortcut}
        key={`${name}-${currencies[key].shortcut}`}
      >
        {currencies[key].name}
      </option>
    ))}
  </select>
);

CurrencySelector.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.string,
  handler: PropTypes.func.isRequired,
};

export default CurrencySelector;
