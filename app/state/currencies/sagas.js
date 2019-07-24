import { put, takeLatest, select, delay } from 'redux-saga/effects';
import { apiGet } from '../common/api';
import {
  actionTypes,
  fetchCurrenciesFail,
  fetchCurrenciesSuccess,
  fetchCurrencies,
} from './actions';

export function* fetchCurrenciesSaga() {
  yield takeLatest(actionTypes.FETCH_CURRENCIES, function*(action) {
    let response = {};
    try {
      response = yield apiGet({ url: action.url });
    } catch (e) {
      yield put(fetchCurrenciesFail(e));
      return;
    }

    yield put(
      fetchCurrenciesSuccess({
        base: response.base,
        rates: response.rates,
      }),
    );
  });
}

export function* fetchCurrenciesPeriodicallySaga() {
  yield takeLatest(actionTypes.FETCH_CURRENCIES_PERIODICALLY, function*() {
    while (true) {
      const {
        EW: {
          exchange: { from, updating },
        },
      } = yield select();
      if (!updating) break;
      yield put(fetchCurrencies(from));
      yield delay(100000);
    }
  });
}

export function* fetchSelectedCurrencySaga() {
  yield takeLatest(actionTypes.SET_SELECTED_CURRENCY, function*(action) {
    const { currency } = action;
    const {
      EW: { exchange },
    } = yield select();
    if (!exchange[currency]) {
      put(fetchCurrencies(currency));
    }
  });
}
