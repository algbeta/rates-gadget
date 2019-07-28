import { all, fork } from 'redux-saga/effects';
import { sagas as currenciesSagas } from '../currencies';
import { sagas as amountSagas } from '../amount';
import { sagas as accountSagas } from '../account';

export default function* rootSaga() {
  yield all([
    fork(currenciesSagas.fetchCurrenciesSaga),
    fork(currenciesSagas.fetchCurrenciesPeriodicallySaga),
    fork(currenciesSagas.prepareResponseRatesSaga),
    fork(amountSagas.handleInputSaga),
    fork(accountSagas.validateMoneyTransferSaga),
  ]);
}
