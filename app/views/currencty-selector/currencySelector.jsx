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

    const currency = ev.target.value;
    setSelectedCurrency(currency, name);
  }

  render() {
    const { name, selected } = this.props;
    return (
      <select
        name={name}
        defaultValue={selected}
        onChange={this.onSelectChange}
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
}

CurrencySelector.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.string,
  setSelectedCurrency: PropTypes.func.isRequired,
};

export default CurrencySelector;
