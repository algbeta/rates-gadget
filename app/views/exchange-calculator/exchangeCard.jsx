import React from 'react';
import PropTypes from 'prop-types';
import CurrencySelector from '../currencty-selector';
import AmountInput from '../amount-input';
import Account from '../account';
import Rate from '../rate';

const ExchangeCard = ({ currencyFrom, currencyTo, selectName }) => (
  <div className="card mb-2">
    <div className="card-body">
      <div className="form-group">
        <Rate from={currencyFrom} to={currencyTo} />
        <CurrencySelector name={selectName} />
        <Account currency={currencyFrom} />
      </div>
      <div className="form-group">
        <AmountInput className="mt-5" name={selectName} />
      </div>
    </div>
  </div>
);

ExchangeCard.propTypes = {
  currencyFrom: PropTypes.string.isRequired,
  currencyTo: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
};

export default ExchangeCard;
