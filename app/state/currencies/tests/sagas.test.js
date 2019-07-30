import { testSaga, expectSaga } from 'redux-saga-test-plan';
import {
  fetchCurrenciesSaga,
  fetchCurrenciesWatchSaga,
  fetchCurrenciesPeriodicallySaga,
  fetchCurrenciesPeriodicallyWatchSaga,
  prepareResponseRatesWatchSaga,
  prepareResponseRatesSaga,
} from '../sagas';
import { actionTypes } from '../actions';
import { apiGet } from '../../common/api';

jest.mock('../../../utils/apiUrls', () => ({
  getLatest: jest.fn().mockImplementation(() => 'url'),
}));

jest.mock('../../common/api', () => ({
  apiGet: jest.fn().mockImplementation(() => ({
    data: true,
  })),
}));

jest.mock('../utils', () => ({
  processResponse: jest.fn().mockImplementation(data => data),
}));

describe('Currencies sagas tests', () => {
  describe('fetchCurrencies sagas', () => {
    test('fetchCurrenciesWatchSaga', () => {
      testSaga(fetchCurrenciesWatchSaga)
        .next()
        .takeLatest(actionTypes.FETCH_CURRENCIES, fetchCurrenciesSaga)
        .next()
        .isDone();
    });

    test('fetchCurrenciesSaga & successful api call', () => {
      const saga = testSaga(fetchCurrenciesSaga);
      saga
        .next()
        .call(apiGet, { url: 'url' })
        .next({ data: true })
        .put({ type: actionTypes.PREPARE_RATES, response: { data: true } })
        .next()
        .isDone();
    });

    test('fetchCurrenciesSaga & failed api call', () => {
      const saga = testSaga(fetchCurrenciesSaga);
      const myError = new Error('custom error');
      saga
        .next()
        .call(apiGet, { url: 'url' })
        .throw(myError)
        .put({ type: actionTypes.FETCH_CURRENCIES_FAIL, error: myError })
        .next()
        .isDone();
    });
  });

  describe('prepareRates sagas', () => {
    test('prepareResponseRatesWatchSaga', () => {
      testSaga(prepareResponseRatesWatchSaga)
        .next()
        .takeLatest(actionTypes.PREPARE_RATES, prepareResponseRatesSaga)
        .next()
        .isDone();
    });

    test('prepareResponseRatesSaga', () => {
      testSaga(prepareResponseRatesSaga, {
        response: { base: 'USD', rates: 'rates' },
      })
        .next()
        .put({
          type: actionTypes.FETCH_CURRENCIES_SUCCESS,
          response: 'USD',
        });
    });
  });

  describe('fetch currencies periodically sagas', () => {
    test('fetchCurrenciesPeriodicallyWatchSaga', () => {
      testSaga(fetchCurrenciesPeriodicallyWatchSaga)
        .next()
        .takeLatest(
          actionTypes.FETCH_CURRENCIES_PERIODICALLY,
          fetchCurrenciesPeriodicallySaga,
        )
        .next()
        .isDone();
    });

    test('fetchCurrenciesPeriodicallySaga & !updating', () => {
      expectSaga(fetchCurrenciesPeriodicallySaga)
        .provide({
          select: () => ({
            EW: {
              exchange: {
                from: 'USD',
                updating: false,
              },
            },
          }),
        })
        .run();
    });

    test('fetchCurrenciesPeriodicallySaga & updating', () => {
      expectSaga(fetchCurrenciesPeriodicallySaga)
        .provide({
          select: () => ({
            EW: {
              exchange: {
                from: 'USD',
                updating: true,
              },
            },
          }),
        })
        .put({
          type: actionTypes.FETCH_CURRENCIES,
        })
        .delay()
        .run();
    });
  });
});
