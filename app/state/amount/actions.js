const actionTypes = {
  SET_EXCHANGE_AMOUNT: '@@rates-widget/SET_EXCHANGE_AMOUNT',
  INPUT_EXCHANGE_AMOUNT: '@@rates-widget/INPUT_EXCHANGE_AMOUNT',
  EXCHANGE_AMOUNT_VALIDATION: '@@rates-widget/EXCHANGE_AMOUNT_VALIDATION',
  AMOUNT_CLEAN_UP: '@@rates-widget/AMOUNT_CLEAN_UP',
};

const setExchangeAmount = (amount, inputName, error) => ({
  type: actionTypes.SET_EXCHANGE_AMOUNT,
  inputName,
  amount,
  error,
});

const inputExchangeAmount = (amount, inputName) => ({
  type: actionTypes.INPUT_EXCHANGE_AMOUNT,
  inputName,
  amount,
});

const cleanUp = () => ({
  type: actionTypes.AMOUNT_CLEAN_UP,
});

export { actionTypes, setExchangeAmount, inputExchangeAmount, cleanUp };
