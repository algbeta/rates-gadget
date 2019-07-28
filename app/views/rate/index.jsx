import { connect } from 'react-redux';
import Rate from './rate';
import { forceTwoDigitsAfterDot } from '../../utils/currencies';

const mapStateToProps = ({ EW: { exchange } }, ownProps) => {
  const { from, to } = ownProps;
  let rate = 0;
  if (exchange.from === exchange.to) {
    rate = 1;
  }
  if (exchange[from] && exchange[from][to]) {
    rate = exchange[from][to];
  }

  return {
    rate: forceTwoDigitsAfterDot(rate),
  };
};

export default connect(mapStateToProps)(Rate);
