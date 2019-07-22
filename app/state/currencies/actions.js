import API_URLS from '../../utils/apiUrls';

const actionTypes = {
  FETCH_CURRENCIES: 'FETCH_CURRENCIES',
  FETCH_CURRENCIES_SUCCESS: 'FETCH_CURRENCIES_SUCCESS',
  FETCH_CURRENCIES_FAIL: 'FETCH_CURRENCIES_FAIL',
};

const fetchCurrencies = () => ({
  type: actionTypes.FETCH_CURRENCIES,
  url: API_URLS.getLatest(),
});

const fetchCurrenciesFail = error => ({
  type: actionTypes.FETCH_CURRENCIES_FAIL,
  error,
});

const fetchCurrenciesSuccess = data => ({
  type: actionTypes.FETCH_CURRENCIES_SUCCESS,
  data,
});

export {
  actionTypes,
  fetchCurrencies,
  fetchCurrenciesFail,
  fetchCurrenciesSuccess,
};
