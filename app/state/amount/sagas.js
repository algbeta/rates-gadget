import { debounce, put } from 'redux-saga/effects';
import {
  actionTypes,
  setExchangeAmount,
  exchangeAmountValidation,
} from './actions';

const validate = value => /^[0-9]?[0-9]?(\.[0-9][0-9]?)?$/.test(value);

function* handleInputSaga(action) {
  yield put(exchangeAmountValidation(false));
  if (validate(action.amount)) {
    yield put(setExchangeAmount({ amount: action.amount }));
  } else {
    yield put(exchangeAmountValidation(true));
  }
}

function* watchInputSaga() {
  yield debounce(500, actionTypes.INPUT_EXCHANGE_AMOUNT, handleInputSaga);
}

export { watchInputSaga };
