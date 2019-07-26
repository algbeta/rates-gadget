import { currencyTypeToSelect } from '../../utils/currencies';

const actionTypes = {
  TRANSFER_MONEY: '@@rates-widget/TRANSFER_MONEY',
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

const transfer = amount => ({
  type: actionTypes.TRANSFER_MONEY,
  amount,
});

export { actionTypes, setSelectedCurrency, transfer };
