import { mapStateToProps } from '../index';
import * as currencyModule from '../../../utils/currencies';
currencyModule.forceTwoDigitsAfterDot = jest
  .fn()
  .mockImplementation(data => data);

describe('Rate hoc tests', () => {
  test('mapStateToProps', () => {
    const storeMock = {
      EW: {
        exchange: {
          USD: {
            EUR: 1.5,
          },
        },
      },
    };

    const ownProps = {
      from: 'USD',
      to: 'EUR',
    };

    const value = mapStateToProps(storeMock, ownProps);
    expect(value).toEqual({
      rate: 1.5,
    });
  });

  test('mapStateToProps & same currency', () => {
    const storeMock = {
      EW: {
        exchange: {
          USD: {
            EUR: 1.5,
          },
        },
      },
    };

    const ownProps = {
      from: 'USD',
      to: 'USD',
    };

    const value = mapStateToProps(storeMock, ownProps);
    expect(value).toEqual({
      rate: 1,
    });
  });

  test('mapStateToProps & no exchange data', () => {
    const storeMock = {
      EW: {
        exchange: {},
      },
    };

    const ownProps = {
      from: 'USD',
      to: 'GBP',
    };

    const value = mapStateToProps(storeMock, ownProps);
    expect(value).toEqual({
      rate: 0,
    });
  });
});
