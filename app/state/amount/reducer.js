import { actions as accountActions } from '../account';
import { actionTypes } from './actions';
import { currencyTypeToSelect } from '../../utils/currencies';
const initialState = {
  [currencyTypeToSelect.to]: {
    value: '',
    error: false,
  },
  [currencyTypeToSelect.from]: {
    value: '',
    error: false,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_EXCHANGE_AMOUNT: {
      return {
        ...state,
        [currencyTypeToSelect[action.inputName]]: {
          value: action.amount,
          error: action.error,
        },
      };
    }
    case actionTypes.AMOUNT_CLEAN_UP:
    case accountActions.actionTypes.VALIDATED_MONEY_TRANSFER: {
      return initialState;
    }
    default:
      return state;
  }
}
