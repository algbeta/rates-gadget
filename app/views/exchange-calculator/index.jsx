import { compose } from 'redux';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import rootSaga from '../../state/common/rootSaga';
import actions from '../../state/currencies';
import ExchangeCalculator from './exchange-calculator';

const withSaga = injectSaga({
  key: 'ExchangeCalculator',
  saga: rootSaga,
  mode: DAEMON,
});

const withConnect = connect(
  null,
  { fetchCurrencies: actions.fetchCurrencies },
);

export default compose(
  withSaga,
  withConnect,
)(ExchangeCalculator);
