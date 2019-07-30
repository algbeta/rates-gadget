import { all, fork } from 'redux-saga/effects';
import { sagas as currenciesSagas } from '../currencies';
import { sagas as amountSagas } from '../amount';
import { sagas as accountSagas } from '../account';

export default function* rootSaga() {
  yield all([
    fork(currenciesSagas.fetchCurrenciesWatchSaga),
    fork(currenciesSagas.fetchCurrenciesPeriodicallyWatchSaga),
    fork(currenciesSagas.prepareResponseRatesWatchSaga),
    fork(amountSagas.handleCurrencySelectSaga),
    fork(amountSagas.handleInputSaga),
    fork(accountSagas.validateMoneyTransferSaga),
  ]);
}
