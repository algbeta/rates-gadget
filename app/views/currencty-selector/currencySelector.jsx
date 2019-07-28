import React from 'react';
import PropTypes from 'prop-types';
import currencies from '../../utils/currencies';

function CurrencySelector(props) {
  const onSelectChange = ev => {
    const { setSelectedCurrency, name } = props;

    const currency = ev.target.value;
    setSelectedCurrency(currency, name);
  };

  const { name, selected } = props;
  return (
    <select
      name={name}
      defaultValue={selected}
      onChange={onSelectChange}
      className="custom-select mr-sm-2"
    >
      {Object.keys(currencies).map(key => {
        const currency = currencies[key].shortcut;
        return (
          <option value={currency} key={`${name}-${currency}`}>
            {currencies[key].name}
          </option>
        );
      })}
    </select>
  );
}

CurrencySelector.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.string,
  setSelectedCurrency: PropTypes.func.isRequired,
};

export default CurrencySelector;
