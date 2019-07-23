import { put, takeLatest } from 'redux-saga/effects';
import { apiGet } from '../common/api';
import { actions } from '.';

export function* fetchCurrencies() {
  yield takeLatest(actions.actionTypes.FETCH_CURRENCIES, function*(action) {
    let response = {};
    try {
      response = yield apiGet({ url: action.url });
    } catch (e) {
      yield put(actions.fetchCurrenciesFail(e));
      return;
    }
    
    yield put(
      actions.fetchCurrenciesSuccess({
        base: response.base,
        rates: response.rates,
      }),
    );
  });
}
