import React from 'react';
import PropTypes from 'prop-types';
import { currencyTypeToSelect } from '../../utils/currencies';
import CurrencySelector from '../currencty-selector';
import AmountInput from '../amount-input';
import Account from '../account';
import Spinner from '../spinner';
import Rate from '../rate';

class ExchangeCalculator extends React.Component {
  componentDidMount() {
    this.props.fetchCurrenciesPeriodically(true);
  }

  componentWillUnmount() {
    this.props.fetchCurrenciesPeriodically(false);
  }

  render() {
    const { exchangedAmount, userEnteredData, from, to } = this.props;
    return (
      <div className="container">
        <h1>Currency exchange</h1>
        <Rate from={from} to={to} />
        <br />
        <Rate from={to} to={from} />
        <div className="form-group">
          <CurrencySelector name={currencyTypeToSelect.from} />
          <Account currency={from} />
          <AmountInput className="mt-5" />
        </div>
        <CurrencySelector name={currencyTypeToSelect.to} />
        <Account currency={to} />
        <span>{exchangedAmount || (userEnteredData && <Spinner />)}</span>
      </div>
    );
  }
}

ExchangeCalculator.propTypes = {
  fetchCurrenciesPeriodically: PropTypes.func.isRequired,
  exchangedAmount: PropTypes.number,
  userEnteredData: PropTypes.number.isRequired,
};

export default ExchangeCalculator;
