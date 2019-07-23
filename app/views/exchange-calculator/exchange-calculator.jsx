import React from 'react';
import PropTypes from 'prop-types';
import { currencyTypeToSelect } from '../../utils/currencies';
import CurrencySelector from '../currencty-selector';

class ExchangeCalculator extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: null,
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    const intervalId = setInterval(() => {
      fetchCurrencies(this.props.from);
    }, 10000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div>
        <h1>Currency exchange</h1>
        <CurrencySelector name={currencyTypeToSelect.from} />
        <input name="amount" />
        <CurrencySelector name={currencyTypeToSelect.to} />
        <span>{this.props.exchangedAmount}</span>
      </div>
    );
  }
}

ExchangeCalculator.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  exchangedAmount: PropTypes.number,
};

ExchangeCalculator.defaultProps = {
  exchangedAmount: 1,
};

export default ExchangeCalculator;
