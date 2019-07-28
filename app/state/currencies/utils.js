import currencies from '../../utils/currencies';

function processResponse(base, rates) {
  const processedResponse = {};
  const currenciesArray = Object.keys(currencies);
  processedResponse[base] = rates;

  Object.keys(rates).forEach(cur => {
    processedResponse[cur] = {};
    processedResponse[cur][base] = 1 / rates[cur];
  });

  currenciesArray.forEach(cur => {
    currenciesArray.forEach(propCur => {
      if (propCur === cur) {
        processedResponse[cur][propCur] = 1;
      } else if (processedResponse[cur] && !processedResponse[cur][propCur]) {
        processedResponse[cur][propCur] =
          processedResponse[base][propCur] / processedResponse[base][cur];
      }
    });
  });

  return processedResponse;
}

export { processResponse };
