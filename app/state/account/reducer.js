import { actionTypes } from './actions';
import currencies, { currencyTypeToSelect } from '../../utils/currencies';
const initialState = {
  [currencyTypeToSelect.from]: currencies.GBP.shortcut,
  [currencyTypeToSelect.to]: currencies.USD.shortcut,
  [currencies.EUR.shortcut]: 150,
  [currencies.USD.shortcut]: 1500,
  [currencies.GBP.shortcut]: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
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
