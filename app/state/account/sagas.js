import { put, takeLatest, select } from 'redux-saga/effects';
import { actionTypes, transferFailure, validatedTransfer } from './actions';
import { getCurrencyData } from './utils';
import { currencyTypeToSelect } from '../../utils/currencies';

const isBudgetFine = (state, userAccount, value) => {
  const { account } = state;
  const userAccountValue = getCurrencyData(account, userAccount).value;
  if (value < 0 && userAccountValue + value < 0) {
    return false;
  }

  return true;
};

function* validateMoneyTransferSaga() {
  yield takeLatest(actionTypes.MONEY_TRANSFER, function*() {
    const { EW } = yield select();
    const { value } = EW.amount[currencyTypeToSelect.from];
    const exchanchedValue = EW.amount[currencyTypeToSelect.to].value;

    if (
      isBudgetFine(EW, currencyTypeToSelect.from, value) &&
      isBudgetFine(EW, currencyTypeToSelect.to, exchanchedValue)
    ) {
      yield put(validatedTransfer(exchanchedValue, value));
    } else {
      yield put(transferFailure('Transfer declined: Not enough funds'));
    }
  });
}

export { validateMoneyTransferSaga };
