const actionTypes = {
  SET_EXCHANGE_AMOUNT: '@@rates-widget/SET_EXCHANGE_AMOUNT',
  INPUT_EXCHANGE_AMOUNT: '@@rates-widget/INPUT_EXCHANGE_AMOUNT',
  EXCHANGE_AMOUNT_VALIDATION: '@@rates-widget/EXCHANGE_AMOUNT_VALIDATION',
};

const setExchangeAmount = amount => ({
  type: actionTypes.SET_EXCHANGE_AMOUNT,
  amount,
});

const inputExchangeAmount = amount => ({
  type: actionTypes.INPUT_EXCHANGE_AMOUNT,
  amount,
});

const exchangeAmountValidation = isValid => ({
  type: actionTypes.EXCHANGE_AMOUNT_VALIDATION,
  isValid,
});

export {
  actionTypes,
  setExchangeAmount,
  inputExchangeAmount,
  exchangeAmountValidation,
};
