import { actionTypes } from './actions';
import { getCurrencyData } from './utils';
import currencies, { currencyTypeToSelect } from '../../utils/currencies';
const initialState = {
  [currencyTypeToSelect.from]: currencies.GBP.shortcut,
  [currencyTypeToSelect.to]: currencies.USD.shortcut,
  [currencies.EUR.shortcut]: 150,
  [currencies.USD.shortcut]: 1500,
  [currencies.GBP.shortcut]: 250,
  error: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_SELECTED_CURRENCY: {
      return {
        ...state,
        [action.selectType]: action.currency,
      };
    }
    case actionTypes.VALIDATED_MONEY_TRANSFER: {
      const { exchangedAmount, amount } = action;
      const from = getCurrencyData(state, currencyTypeToSelect.from);
      const to = getCurrencyData(state, currencyTypeToSelect.to);

      return {
        ...state,
        [from.name]: from.value + amount,
        [to.name]: to.value + exchangedAmount,
        error: '',
      };
    }
    case actionTypes.INVALID_MONEY_TRANSFER: {
      return {
        ...state,
        error: action.error,
      };
    }

    default:
      return state;
  }
}
