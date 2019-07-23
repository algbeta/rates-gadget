import { put, takeLatest, select, delay } from 'redux-saga/effects';
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

export function* fetchCurrenciesPeriodically() {
  yield takeLatest(
    actions.actionTypes.FETCH_CURRENCIES_PERIODICALLY,
    function*() {
      while (true) {
        const {
          exchange: { from, updating },
        } = yield select();
        if (!updating) break;
        yield put(actions.fetchCurrencies(from));
        yield delay(50000);
      }
    },
  );
}

export function* fetchSelectedCurrency() {
  yield takeLatest(actions.actionTypes.SET_SELECTED_CURRENCY, function*(
    action,
  ) {
    console.log('fetchselectedcurrency');
    const { currency } = action;
    const { exchange } = yield select();
    if (!exchange[currency]) {
      put(actions.fetchCurrencies(currency));
    }
  });
}
