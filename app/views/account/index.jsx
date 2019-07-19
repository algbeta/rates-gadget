import React from 'react';
import PropTypes from 'prop-types';
import currencies from '../../utils/currencies';

export default class Account extends React.PureComponent {
  render() {
    const { currency, value } = this.props;
    if (!currencies[currency]) return 'Invalid account';
    return (
      <div>
        <span>{currencies[currency].name}</span>
        <span>
          {currencies[currency].sign} {value}
        </span>
      </div>
    );
  }
}

Account.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number,
};

Account.defaultProps = {
  value: 0,
};
