import { put, takeLatest } from 'redux-saga/effects';
import { apiGet } from '../common/api';
import API_URLS from '../../utils/apiUrls';
import {
  fetchCurrenciesSuccess,
  fetchCurrenciesFail
} from './actions';

export function* fetchCurrencies() {
  yield takeLatest(actionTypes.FETCH_CURRENCIES, function*() {
  let response = {};
  try {
    response = yield apiGet(API_URLS.getLatest());
  } catch (e) {
    yield put(fetchCurrenciesFail(e));
    return;
  }

  yield put(fetchCurrenciesSuccess(response));
  });
}
