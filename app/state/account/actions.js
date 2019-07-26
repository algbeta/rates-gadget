import { currencyTypeToSelect } from '../../utils/currencies';

const actionTypes = {
  MONEY_TRANSFER: '@@rates-widget/MONEY_TRANSFER',
  VALIDATED_MONEY_TRANSFER: '@@rates-widget/VALIDATED_MONEY_TRANSFER',
  INVALID_MONEY_TRANSFER: '@@rates-widget/INVALID_MONEY_TRANSFER',
  SET_SELECTED_CURRENCY: '@@rates-widget/SET_SELECTED_CURRENCY',
};

const setSelectedCurrency = (
  currency,
  selectType = currencyTypeToSelect.from,
) => ({
  type: actionTypes.SET_SELECTED_CURRENCY,
  selectType,
  currency,
});

const transfer = (exchangedAmount, amount) => ({
  type: actionTypes.MONEY_TRANSFER,
  exchangedAmount,
  amount,
});

const validatedTransfer = (exchangedAmount, amount) => ({
  type: actionTypes.VALIDATED_MONEY_TRANSFER,
  exchangedAmount,
  amount,
});

const transferFailure = error => ({
  type: actionTypes.INVALID_MONEY_TRANSFER,
  error,
});

export {
  actionTypes,
  setSelectedCurrency,
  transfer,
  validatedTransfer,
  transferFailure,
};
