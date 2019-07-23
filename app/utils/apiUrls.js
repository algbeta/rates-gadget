import currencies from './currencies';

const generateParams = base => {
  const keys = Object.keys(currencies);
  const baseIndex = keys.findIndex(item => item === base);
  keys.splice(baseIndex, 1);
  return keys.join(',');
};

const API_URLS = {
  getLatest: base =>
    `https://api.exchangeratesapi.io/latest?symbols=${generateParams(
      base,
    )}&base=${base}`,
};

export default API_URLS;
