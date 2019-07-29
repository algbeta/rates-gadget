import React from 'react';
import PropTypes from 'prop-types';
import currencies from '../../utils/currencies';

const Rate = props => {
  const getSign = cur => currencies[cur].sign;

  const { from, to, rate } = props;
  return (
    <span>
      1 {getSign(from)} == {rate} {getSign(to)}
    </span>
  );
};

Rate.propTypes = {
  from: PropTypes.oneOf(Object.keys(currencies)),
  to: PropTypes.oneOf(Object.keys(currencies)),
  rate: PropTypes.number.isRequired,
};

export default Rate;
