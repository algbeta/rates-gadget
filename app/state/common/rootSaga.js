import { all, fork } from 'redux-saga/effects';
import { fetchCurrencies } from '../currencies/sagas';

export default function* rootSaga() {
  yield all([fork(fetchCurrencies)]);
}
