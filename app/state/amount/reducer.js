import { actions as accountActions } from '../account';
import { actionTypes } from './actions';
const initialState = {
  value: 0,
  error: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_EXCHANGE_AMOUNT: {
      return {
        ...state,
        value: action.amount,
      };
    }
    case actionTypes.EXCHANGE_AMOUNT_VALIDATION: {
      return {
        ...state,
        error: action.isValid,
      };
    }
    case accountActions.actionTypes.VALIDATED_MONEY_TRANSFER: {
      return {
        ...state,
        value: 0,
      };
    }
    default:
      return state;
  }
}
