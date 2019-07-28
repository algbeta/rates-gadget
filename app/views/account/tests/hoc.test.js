import { mapStateToProps } from '../index';
import * as utils from '../../../utils/currencies';

utils.forceTwoDigitsAfterDot = jest.fn().mockImplementation(data => data);

test('Account mapstatetoprops', () => {
  const storeMock = {
    EW: {
      account: {
        USD: 150,
      },
    },
  };

  const value = mapStateToProps(storeMock, { currency: 'USD' });
  expect(value).toEqual({ value: 150 });
});
