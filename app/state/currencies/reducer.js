import { actionTypes } from './actions';
const initialState = {
  amount: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_EXCHANGE_AMOUNT: {
      return {
        ...state,
        amount: action.amount,
      };
    }
    default:
      return state;
  }
}
