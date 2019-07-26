import API_URLS from '../../utils/apiUrls';

const actionTypes = {
  FETCH_CURRENCIES: '@@rates-widget/FETCH_CURRENCIES',
  FETCH_CURRENCIES_SUCCESS: '@@rates-widget/FETCH_CURRENCIES_SUCCESS',
  FETCH_CURRENCIES_FAIL: '@@rates-widget/FETCH_CURRENCIES_FAIL',

  FETCH_CURRENCIES_PERIODICALLY: '@@rates-widget/INIT_CURRENCY_UPDATE',
  PREPARE_RATES: '@@rates-widget/PREPARE_RATES',
};

const fetchCurrencies = base => {
  const url = API_URLS.getLatest(base);
  return {
    type: actionTypes.FETCH_CURRENCIES,
    url,
  };
};

const fetchCurrenciesPeriodically = flag => ({
  type: actionTypes.FETCH_CURRENCIES_PERIODICALLY,
  updating: flag,
});

const fetchCurrenciesFail = error => ({
  type: actionTypes.FETCH_CURRENCIES_FAIL,
  error,
});

const fetchCurrenciesSuccess = data => ({
  type: actionTypes.FETCH_CURRENCIES_SUCCESS,
  ...data,
});

const prepareRates = response => ({
  type: actionTypes.PREPARE_RATES,
  response,
});

export {
  actionTypes,
  fetchCurrencies,
  fetchCurrenciesFail,
  fetchCurrenciesSuccess,
  fetchCurrenciesPeriodically,
  prepareRates,
};
