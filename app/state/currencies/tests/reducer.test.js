import reducer from '../reducer';
import { actionTypes } from '../actions';
import currencies from '../../../utils/currencies';

describe('Currencies reducer', () => {
  test('should return the initial state', () => {
    const initialState = {
      updating: false,
      base: currencies.USD.shortcut,
    };

    const state = reducer(initialState, { type: 'RANDOM_TYPE' });
    expect(state.updating).toBeFalsy();
    expect(state.base).toEqual(currencies.USD.shortcut);
  });

  test('FETCH_CURRENCIES_SUCCESS', () => {
    const initialState = {
      updating: false,
      base: currencies.USD.shortcut,
    };

    const state = reducer(initialState, {
      type: actionTypes.FETCH_CURRENCIES_SUCCESS,
      response: { EUR: 150 },
    });
    expect(state).toEqual({
      updating: false,
      base: currencies.USD.shortcut,
      EUR: 150,
    });
  });

  test('FETCH_CURRENCIES_PERIODICALLY', () => {
    const initialState = {
      updating: false,
      base: currencies.USD.shortcut,
    };

    const state = reducer(initialState, {
      type: actionTypes.FETCH_CURRENCIES_PERIODICALLY,
      updating: true,
    });
    expect(state).toEqual({
      updating: true,
      base: currencies.USD.shortcut,
    });
  });
});
