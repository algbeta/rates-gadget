import { actionTypes } from './actions';
import currencies from '../../utils/currencies';
const initialState = {
  updating: false,
  base: currencies.USD.shortcut,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_CURRENCIES_SUCCESS: {
      return {
        ...state,
        ...action.response,
      };
    }
    case actionTypes.FETCH_CURRENCIES_PERIODICALLY: {
      return {
        ...state,
        updating: action.updating,
      };
    }
    default:
      return state;
  }
}
