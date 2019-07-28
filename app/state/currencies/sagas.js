import {
  put,
  takeLatest,
  takeEvery,
  select,
  delay,
  call,
} from 'redux-saga/effects';
import { apiGet } from '../common/api';
import {
  actionTypes,
  fetchCurrenciesFail,
  fetchCurrenciesSuccess,
  fetchCurrencies,
  prepareRates,
} from './actions';
import { processResponse } from './utils';
import API_URLS from '../../utils/apiUrls';

export function* fetchCurrenciesSaga() {
  yield takeEvery(actionTypes.FETCH_CURRENCIES, function*() {
    const url = API_URLS.getLatest('EUR');
    let response = {};
    try {
      response = yield call(apiGet, { url });
    } catch (e) {
      yield put(fetchCurrenciesFail(e));
      return;
    }

    yield put(prepareRates(response));
  });
}

export function* prepareResponseRatesSaga() {
  yield takeLatest(actionTypes.PREPARE_RATES, function*(action) {
    const {
      response: { base, rates },
    } = action;

    yield put(
      fetchCurrenciesSuccess({ response: processResponse(base, rates) }),
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
      yield delay(10000);
    }
  });
}
