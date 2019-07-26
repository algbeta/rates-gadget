import React from 'react';
import PropTypes from 'prop-types';
import currencies from '../../utils/currencies';

const Account = ({ currency, value }) => {
  if (!currencies[currency]) return 'Invalid account';
  return (
    <div>
      <span> Available funds: </span>
      <span>
        {value} {currencies[currency].sign}
      </span>
    </div>
  );
};

Account.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Account;
