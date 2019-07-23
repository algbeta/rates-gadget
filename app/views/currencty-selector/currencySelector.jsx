import React from 'react';
import PropTypes from 'prop-types';
import currencies from '../../utils/currencies';

class CurrencySelector extends React.Component {
  constructor() {
    super();

    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(ev) {
    const { setSelectedCurrency, name } = this.props;
    setSelectedCurrency(ev.target.value, name);
  }

  render() {
    const { name, selected } = this.props;
    return (
      <select name={name} selected={selected} onChange={this.onSelectChange}>
        {Object.keys(currencies).map(key => {
          const currency = currencies[key].shortcut;
          return (
            <option
              value={currency}
              key={`${name}-${currency}`}
              selected={currency === selected}
            >
              {currencies[key].name}
            </option>
          );
        })}
      </select>
    );
  }
}

CurrencySelector.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.string,
  setSelectedCurrency: PropTypes.func.isRequired,
};

export default CurrencySelector;
