import { connect } from 'react-redux';
import Rate from './rate';

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
    rate: +rate.toFixed(4),
  };
};

export default connect(mapStateToProps)(Rate);
