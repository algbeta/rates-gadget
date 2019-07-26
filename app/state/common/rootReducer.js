import { combineReducers } from 'redux';
import currenciesReducer from '../currencies';
import amountReducer from '../amount';
import accountReducer from '../account';

export default combineReducers({
  exchange: currenciesReducer,
  amount: amountReducer,
  account: accountReducer,
});
