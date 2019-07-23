import React from 'react';
import PropTypes from 'prop-types';
import { currencyTypeToSelect } from '../../utils/currencies';
import CurrencySelector from '../currencty-selector';
import AmountInput from '../amount-input';

class ExchangeCalculator extends React.Component {
  componentDidMount() {
    this.props.fetchCurrenciesPeriodically(true);
  }

  componentWillUnmount() {
    this.props.fetchCurrenciesPeriodically(false);
  }

  render() {
    return (
      <div>
        <h1>Currency exchange</h1>
        <CurrencySelector name={currencyTypeToSelect.from} />
        <AmountInput />
        <CurrencySelector name={currencyTypeToSelect.to} />
        <span>{this.props.exchangedAmount}</span>
      </div>
    );
  }
}

ExchangeCalculator.propTypes = {
  fetchCurrenciesPeriodically: PropTypes.func.isRequired,
  exchangedAmount: PropTypes.number,
};

ExchangeCalculator.defaultProps = {
  exchangedAmount: 1,
};

export default ExchangeCalculator;
