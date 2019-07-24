import { all, fork } from 'redux-saga/effects';
import { sagas as currenciesSagas } from '../currencies';
import { sagas as amountSagas } from '../amount';

export default function* rootSaga() {
  yield all([
    fork(currenciesSagas.fetchCurrenciesSaga),
    fork(currenciesSagas.fetchCurrenciesPeriodicallySaga),
    fork(currenciesSagas.fetchSelectedCurrencySaga),
    fork(amountSagas.watchInputSaga),
  ]);
}
