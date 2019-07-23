import { actionTypes } from './actions';
import currencies, { currencyTypeToSelect } from '../../utils/currencies';
const initialState = {
  amount: 0,
  [currencyTypeToSelect.from]: currencies.GBP.shortcut,
  [currencyTypeToSelect.to]: currencies.USD.shortcut,
  updating: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_EXCHANGE_AMOUNT: {
      return {
        ...state,
        amount: action.amount,
      };
    }
    case actionTypes.FETCH_CURRENCIES_SUCCESS: {
      return {
        ...state,
        [action.base]: {
          ...action.rates,
        },
      };
    }
    case actionTypes.FETCH_CURRENCIES_PERIODICALLY: {
      return {
        ...state,
        updating: action.updating,
      };
    }
    case actionTypes.SET_SELECTED_CURRENCY: {
      return {
        ...state,
        [action.selectType]: action.currency,
      };
    }
    default:
      return state;
  }
}
