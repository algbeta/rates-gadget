import { put, takeLatest, select } from 'redux-saga/effects';
import { actionTypes, transferFailure, validatedTransfer } from './actions';
import { getCurrencyData } from './utils';
import { currencyTypeToSelect } from '../../utils/currencies';

function* validateMoneyTransferSaga() {
  yield takeLatest(actionTypes.MONEY_TRANSFER, function*(action) {
    const {
      EW: { account },
    } = yield select();
    const { exchangedAmount, amount } = action;
    const from = getCurrencyData(account, currencyTypeToSelect.from);
    if (from.value - amount >= 0) {
      yield put(validatedTransfer(exchangedAmount, amount));
    } else {
      yield put(transferFailure('Transfer declined: Not enough funds'));
    }
  });
}

export { validateMoneyTransferSaga };
