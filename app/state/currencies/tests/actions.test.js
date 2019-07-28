import {
  fetchCurrenciesPeriodically,
  fetchCurrenciesFail,
  fetchCurrenciesSuccess,
  fetchCurrencies,
  prepareRates,
  actionTypes,
} from '../actions';
import API_URLS from '../../../utils/apiUrls';

API_URLS.getLatest = jest.fn().mockImplementation(base => `${base}1`);

describe('Currency actions test', () => {
  test('fetchCurrenciesPeriodically test', () => {
    const action = fetchCurrenciesPeriodically(true);
    expect(action.type).toEqual(actionTypes.FETCH_CURRENCIES_PERIODICALLY);
    expect(action.updating).toBeTruthy();
  });

  test('fetchCurrenciesFail test', () => {
    const action = fetchCurrenciesFail('an error happend');
    expect(action.type).toEqual(actionTypes.FETCH_CURRENCIES_FAIL);
    expect(action.error).toEqual('an error happend');
  });

  test('fetchCurrenciesSuccess test', () => {
    const action = fetchCurrenciesSuccess({ id: 'hashid' });
    expect(action.type).toEqual(actionTypes.FETCH_CURRENCIES_SUCCESS);
    expect(action.id).toEqual('hashid');
  });

  test('prepareRates test', () => {
    const action = prepareRates({ id: 'hashid' });
    expect(action.type).toEqual(actionTypes.PREPARE_RATES);
    expect(action.response).toEqual({ id: 'hashid' });
  });

  test('fetchCurrencies test', () => {
    const action = fetchCurrencies('api_endpoint');
    expect(action.type).toEqual(actionTypes.FETCH_CURRENCIES);
    expect(action.url).toEqual('api_endpoint1');
  });
});
