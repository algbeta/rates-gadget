import { takeLatest, put, select } from 'redux-saga/effects';
import { actionTypes, setExchangeAmount, cleanUp } from './actions';
import { currencyTypeToSelect } from '../../utils/currencies';
import { selectExchangedAmount } from '../common/selectors';

const validate = value => /^([-+]?\d+(\.\d{1,2})?)?$/.test(value);

const getOtherInputName = inputName => {
  const keys = Object.keys(currencyTypeToSelect);
  const item = keys.filter(key => key !== inputName);
  return item[0];
};

function* handleInputSaga() {
  yield takeLatest(actionTypes.INPUT_EXCHANGE_AMOUNT, function*(action) {
    const { amount, inputName } = action;
    const otherInputName = getOtherInputName(inputName);
    const { EW } = yield select();

    let error = false;
    if (!validate(amount)) {
      error = true;

      yield put(setExchangeAmount(amount, inputName, error));
    } else if (!amount) {
      yield put(cleanUp());
    } else {
      const exchangedAmount = selectExchangedAmount(
        EW,
        amount,
        inputName,
        otherInputName,
      );
      yield put(setExchangeAmount(-exchangedAmount, otherInputName));
      yield put(setExchangeAmount(Number.parseFloat(amount), inputName, error));
    }
  });
}

export { handleInputSaga };
