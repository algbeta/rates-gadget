import { combineReducers } from 'redux';
import currenciesReducer from '../currencies';
import amountReducer from '../amount';

export default combineReducers({
  exchange: currenciesReducer,
  amount: amountReducer,
});
