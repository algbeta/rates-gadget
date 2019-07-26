import React from 'react';
import PropTypes from 'prop-types';
import { currencyTypeToSelect } from '../../utils/currencies';
import CurrencySelector from '../currencty-selector';
import AmountInput from '../amount-input';
import Account from '../account';
import Spinner from '../spinner';
import Rate from '../rate';

class ExchangeCalculator extends React.Component {
  constructor() {
    super();

    this.transferMoney = this.transferMoney.bind(this);
  }

  componentDidMount() {
    this.props.fetchCurrenciesPeriodically(true);
  }

  componentWillUnmount() {
    this.props.fetchCurrenciesPeriodically(false);
  }

  transferMoney() {
    const { exchangedAmount, amount, transfer } = this.props;
    transfer(exchangedAmount, amount);
  }

  render() {
    const { exchangedAmount, from, to, amount } = this.props;
    return (
      <div className="container">
        <h1>Currency exchange</h1>
        <div className="form-group">
          <Rate from={from} to={to} />
          <CurrencySelector name={currencyTypeToSelect.from} />
          <Account currency={from} />
        </div>
        <div className="form-group">
          <AmountInput className="mt-5" />
          <span>
            {exchangedAmount || (!!amount && <Spinner />)}
          </span>
        </div>
        <div className="form-group">
          <Rate from={to} to={from} />
          <CurrencySelector name={currencyTypeToSelect.to} />
          <Account currency={to} />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.transferMoney}
        >
          Transfer
        </button>
      </div>
    );
  }
}

ExchangeCalculator.propTypes = {
  fetchCurrenciesPeriodically: PropTypes.func.isRequired,
  transfer: PropTypes.func.isRequired,
  exchangedAmount: PropTypes.number,
  amount: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
};

export default ExchangeCalculator;
