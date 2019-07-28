import { forceTwoDigitsAfterDot } from '../../utils/currencies';

const getRate = ({ exchange, account }, from, to) => {
  let rate = 0;
  const currencyFrom = account[from];
  const currencyTo = account[to];
  if (currencyFrom === currencyTo) {
    rate = 1;
  }
  if (exchange[currencyFrom] && exchange[currencyFrom][currencyTo]) {
    rate = exchange[currencyFrom][currencyTo];
  }

  return rate;
};

export const selectExchangedAmount = (state, amount, from, to) => {
  const rate = getRate(state, from, to);
  return forceTwoDigitsAfterDot(amount * rate);
};
