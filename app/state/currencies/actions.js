import API_URLS from '../../utils/apiUrls';

const actionTypes = {
  FETCH_CURRENCIES: '@@rates-widget/FETCH_CURRENCIES',
  FETCH_CURRENCIES_SUCCESS: '@@rates-widget/FETCH_CURRENCIES_SUCCESS',
  FETCH_CURRENCIES_FAIL: '@@rates-widget/FETCH_CURRENCIES_FAIL',
  SET_EXCHANGE_AMOUNT: '@@rates-widget/SET_EXCHANGE_AMOUNT',
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

const setExchangeAmount = amount => ({
  type: actionTypes.SET_EXCHANGE_AMOUNT,
  amount,
});

export {
  actionTypes,
  fetchCurrencies,
  fetchCurrenciesFail,
  fetchCurrenciesSuccess,
  setExchangeAmount,
};
