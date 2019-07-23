import { compose } from 'redux';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { DAEMON } from 'utils/constants';
import rootSaga from '../../state/common/rootSaga';
import reducer, { actions } from '../../state/currencies';
import ExchangeCalculator from './exchange-calculator';

const withSaga = injectSaga({
  key: 'ExchangeCalculator',
  saga: rootSaga,
  mode: DAEMON,
});

const mapStateToProps = ({ exchange }) => ({
  exchangedAmount: exchange.amount * exchange.from,
  from: exchange.from,
});

const mapDispatchToProps = {
  fetchCurrencies: actions.fetchCurrencies,
  setSelectedCurrency: actions.setSelectedCurrency,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'exchange', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ExchangeCalculator);
