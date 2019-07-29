import { takeLatest, put, select } from 'redux-saga/effects';
import { actionTypes, setExchangeAmount, cleanUp } from './actions';
import { actions as accountActions } from '../account';
import { currencyTypeToSelect } from '../../utils/currencies';
import { selectExchangedAmount } from '../common/selectors';

const validate = value => /^([-+]?\d+(\.\d{1,2})?)?$/.test(value);

const getOtherInputName = inputName => {
  const keys = Object.keys(currencyTypeToSelect);
  const item = keys.filter(key => key !== inputName);
  return item[0];
};

function* handleCurrencySelectSaga() {
  yield takeLatest(accountActions.actionTypes.SET_SELECTED_CURRENCY, function*(
    action,
  ) {
    const inputName = action.selectType;
    const otherInputName = getOtherInputName(inputName);

    const { EW } = yield select();
    const amount = EW.amount[inputName].value;

    if (!validate(amount)) {
      yield put(setExchangeAmount(amount, inputName, true));
    } else if (!amount) {
      yield put(cleanUp());
    } else {
      const exchangedAmount = selectExchangedAmount(
        EW,
        amount,
        otherInputName,
        inputName,
      );
      yield put(setExchangeAmount(-exchangedAmount, otherInputName, false));
    }
  });
}

function* handleInputSaga() {
  yield takeLatest(actionTypes.INPUT_EXCHANGE_AMOUNT, function*(action) {
    const { amount, inputName } = action;
    const otherInputName = getOtherInputName(inputName);
    const { EW } = yield select();

    if (!validate(amount)) {
      yield put(setExchangeAmount(amount, inputName, true));
    } else if (!amount) {
      yield put(cleanUp());
    } else {
      const exchangedAmount = selectExchangedAmount(
        EW,
        amount,
        inputName,
        otherInputName,
      );
      yield put(setExchangeAmount(-exchangedAmount, otherInputName, false));
      yield put(setExchangeAmount(Number.parseFloat(amount), inputName, false));
    }
  });
}

export { handleInputSaga, handleCurrencySelectSaga };
