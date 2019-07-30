import { put, takeLatest, select, delay, call } from 'redux-saga/effects';
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
import currencies from '../../utils/currencies';

export function* fetchCurrenciesSaga() {
  const url = API_URLS.getLatest(currencies.EUR.shortcut);
  let response = {};
  try {
    response = yield call(apiGet, { url });
  } catch (e) {
    yield put(fetchCurrenciesFail(e));
    return;
  }

  yield put(prepareRates(response));
}

export function* fetchCurrenciesWatchSaga() {
  yield takeLatest(actionTypes.FETCH_CURRENCIES, fetchCurrenciesSaga);
}

export function* prepareResponseRatesSaga(action) {
  const {
    response: { base, rates },
  } = action;

  yield put(fetchCurrenciesSuccess({ response: processResponse(base, rates) }));
}

export function* prepareResponseRatesWatchSaga() {
  yield takeLatest(actionTypes.PREPARE_RATES, prepareResponseRatesSaga);
}

export function* fetchCurrenciesPeriodicallySaga() {
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
}

export function* fetchCurrenciesPeriodicallyWatchSaga() {
  yield takeLatest(
    actionTypes.FETCH_CURRENCIES_PERIODICALLY,
    fetchCurrenciesPeriodicallySaga,
  );
}
