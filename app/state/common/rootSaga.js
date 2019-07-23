import { all, fork } from 'redux-saga/effects';
import {
  fetchCurrencies,
  fetchCurrenciesPeriodically,
  fetchSelectedCurrency,
} from '../currencies/sagas';

export default function* rootSaga() {
  yield all([
    fork(fetchCurrencies),
    fork(fetchCurrenciesPeriodically),
    fork(fetchSelectedCurrency),
  ]);
}
