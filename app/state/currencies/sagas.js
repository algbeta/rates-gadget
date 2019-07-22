import { put, takeLatest } from 'redux-saga/effects';
import { apiGet } from '../common/api';
import API_URLS from '../../utils/apiUrls';
import { actions } from '.';

export function* fetchCurrencies() {
  yield takeLatest(actions.actionTypes.FETCH_CURRENCIES, function*() {
    let response = {};
    try {
      response = yield apiGet({ url: API_URLS.getLatest() });
    } catch (e) {
      yield put(actions.fetchCurrenciesFail(e));
      return;
    }

    yield put(actions.fetchCurrenciesSuccess(response));
  });
}
