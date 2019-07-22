import 'whatwg-fetch';

const baseFetchApi = (options, method) => {
  const { url, data } = options;
  return fetch(url, {
    method,
    body: data,
  })
    .catch(error => {
      if (error && !error.response) {
        throw new Error('Failed to fetch');
      } else {
        return Promise.reject(error);
      }
    })
    .then(response => response.json())
    .catch(error => Promise.reject(error));
};
const api = options => baseFetchApi(options, 'POST');
const apiGet = options => baseFetchApi(options, 'GET');

export { baseFetchApi, api, apiGet };
