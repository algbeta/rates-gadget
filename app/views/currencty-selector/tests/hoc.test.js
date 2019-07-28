import { mapStateToProps } from '../index';
import * as utils from '../../../utils/currencies';

utils.forceTwoDigitsAfterDot = jest.fn().mockImplementation(data => data);

describe('CurrencySelector hoc tests', () => {
  test('mapStateToProps', () => {
    const storeMock = {
      EW: {
        account: {
          from: 'USD',
        },
      },
    };

    const value = mapStateToProps(storeMock, { name: 'from' });
    expect(value).toEqual({ selected: 'USD' });
  });
});
