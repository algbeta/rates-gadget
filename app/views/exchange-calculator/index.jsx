import { compose } from 'redux';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { DAEMON } from 'utils/constants';
import rootSaga from '../../state/common/rootSaga';
import rootReducer from '../../state/common/rootReducer';
import { actions } from '../../state/currencies';
import ExchangeCalculator from './exchange-calculator';
import './index.scss';

const withSaga = injectSaga({
  key: 'ExchangeCalculator',
  saga: rootSaga,
  mode: DAEMON,
});

const mapStateToProps = ({ EW: { exchange, amount } }) => {
  let rate = 0;
  if (exchange.from === exchange.to) {
    rate = 1;
  }
  if (exchange[exchange.from] && exchange[exchange.from][exchange.to]) {
    rate = exchange[exchange.from][exchange.to];
  }

  return {
    userEnteredData: !!amount.value,
    exchangedAmount: +(+amount.value * rate).toFixed(2),
    from: exchange.from,
    to: exchange.to,
  };
};

const mapDispatchToProps = {
  fetchCurrenciesPeriodically: actions.fetchCurrenciesPeriodically,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'EW', reducer: rootReducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ExchangeCalculator);
