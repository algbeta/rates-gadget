import { mapStateToProps } from '../index';
import currencies, { currencyTypeToSelect } from '../../../utils/currencies';

describe('ExchangeCalculator hoc tests', () => {
  test('mapStateToProps', () => {
    const storeMock = {
      EW: {
        account: {
          from: currencies.USD.shortcut,
          to: currencies.GBP.shortcut,
          error: 'Error',
        },
        amount: {
          [currencyTypeToSelect.from]: {
            value: 150,
            error: false,
          },
          [currencyTypeToSelect.to]: {
            value: 100,
            error: false,
          },
        },
        exchange: {
          [currencies.USD.shortcut]: {
            prop1: 1,
          },
        },
      },
    };

    const value = mapStateToProps(storeMock);
    expect(value).toEqual({
      from: currencies.USD.shortcut,
      to: currencies.GBP.shortcut,
      sameCurrency: false,
      amount: 150,
      areCurrenciesLoaded: true,
      validationFailed: false,
      transactionError: 'Error',
    });
  });
});
