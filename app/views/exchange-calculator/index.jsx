import { connect } from 'react-redux';
import { actions } from '../../state/currencies';
import { actions as accountActions } from '../../state/account';
import currencies, { currencyTypeToSelect } from '../../utils/currencies';
import ExchangeCalculator from './exchangeCalculator';
import './index.scss';

const mapStateToProps = ({ EW }) => {
  const { amount, account, exchange } = EW;
  return {
    from: account.from,
    to: account.to,
    sameCurrency: account.from === account.to,
    amount: amount[currencyTypeToSelect.from].value,
    areCurrenciesLoaded: !!exchange[currencies.USD.shortcut],
    validationFailed:
      amount[currencyTypeToSelect.to].error ||
      amount[currencyTypeToSelect.from].error,
    transactionError: account.error,
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
export { mapStateToProps };
