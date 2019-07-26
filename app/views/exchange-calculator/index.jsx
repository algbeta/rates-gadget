import { connect } from 'react-redux';
import { actions } from '../../state/currencies';
import { actions as accountActions } from '../../state/account';
import ExchangeCalculator from './exchange-calculator';
import './index.scss';

const mapStateToProps = ({ EW: { exchange, amount, account } }) => {
  let rate = 0;
  const { from, to } = account;
  if (from === to) {
    rate = 1;
  }
  if (exchange[from] && exchange[from][to]) {
    rate = exchange[from][to];
  }

  return {
    exchangedAmount: +(+amount.value * rate).toFixed(2),
    from,
    to,
    amount: amount.value,
  };
};

const mapDispatchToProps = {
  fetchCurrenciesPeriodically: actions.fetchCurrenciesPeriodically,
  transfer: accountActions.transfer,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExchangeCalculator);
