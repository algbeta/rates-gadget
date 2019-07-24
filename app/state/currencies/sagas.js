import {
  put,
  takeLatest,
  takeEvery,
  select,
  delay,
  call,
  all,
} from 'redux-saga/effects';
import { apiGet } from '../common/api';
import {
  actionTypes,
  fetchCurrenciesFail,
  fetchCurrenciesSuccess,
  fetchCurrencies,
} from './actions';
import currencies from '../../utils/currencies';
import API_URLS from '../../utils/apiUrls';

export function* fetchCurrenciesSaga() {
  yield takeEvery(actionTypes.FETCH_CURRENCIES, function*() {
    const urls = Object.keys(currencies).map(cur => API_URLS.getLatest(cur));
    let responses = [];
    try {
      responses = yield all(urls.map(url => call(apiGet, { url })));
    } catch (e) {
      yield put(fetchCurrenciesFail(e));
      return;
    }

    yield all(
      responses.map(response =>
        put(
          fetchCurrenciesSuccess({
            base: response.base,
            rates: response.rates,
          }),
        ),
      ),
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
