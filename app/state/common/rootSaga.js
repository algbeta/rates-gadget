import { fetchCurrencies } from '../currencies/sagas';

export default function* rootSaga() {
  yield [fetchCurrencies];
}
