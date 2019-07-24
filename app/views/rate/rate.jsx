import React from 'react';
import PropTypes from 'prop-types';
import currencies from '../../utils/currencies';

class Rate extends React.PureComponent {
  getSign(cur) {
    return currencies[cur].sign;
  }

  render() {
    const { from, to, rate } = this.props;
    return (
      <span>
        1 {this.getSign(from)} == {rate} {this.getSign(to)}
      </span>
    );
  }
}

Rate.propTypes = {
  from: PropTypes.oneOf(Object.keys(currencies)),
  to: PropTypes.oneOf(Object.keys(currencies)),
  rate: PropTypes.number.isRequired,
};

export default Rate;
