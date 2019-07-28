import React from 'react';
import PropTypes from 'prop-types';
import { currencyTypeToSelect } from '../../utils/currencies';
import Spinner from '../spinner';
import ExchangeCard from './exchangeCard';

class ExchangeCalculator extends React.Component {
  componentDidMount() {
    this.props.fetchCurrenciesPeriodically(true);
  }

  componentWillUnmount() {
    this.props.fetchCurrenciesPeriodically(false);
  }

  render() {
    const {
      from,
      to,
      amount,
      validationFailed,
      sameCurrency,
      areCurrenciesLoaded,
      transactionError,
    } = this.props;
    if (!areCurrenciesLoaded) return <Spinner />;
    return (
      <div className="container">
        <h1>Currency exchange</h1>
        {transactionError && (
          <div className="alert-secondary" role="alert">
            {transactionError}
          </div>
        )}
        <ExchangeCard
          currencyFrom={from}
          currencyTo={to}
          selectName={currencyTypeToSelect.from}
        />
        <ExchangeCard
          currencyFrom={to}
          currencyTo={from}
          selectName={currencyTypeToSelect.to}
        />
        <button
          type="button"
          className="btn btn-primary float-right"
          onClick={this.props.transfer}
          disabled={!amount || validationFailed || sameCurrency}
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
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  validationFailed: PropTypes.bool.isRequired,
  sameCurrency: PropTypes.bool.isRequired,
  areCurrenciesLoaded: PropTypes.bool.isRequired,
  transactionError: PropTypes.string,
};

export default ExchangeCalculator;
