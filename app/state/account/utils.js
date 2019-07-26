const getCurrencyData = (state, currency) => ({
  name: state[currency],
  value: state[state[currency]],
});

export { getCurrencyData };
