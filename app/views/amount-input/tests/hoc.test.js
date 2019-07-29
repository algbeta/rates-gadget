import { mapStateToProps } from '../index';

test('AmountInput mapstatetoprops', () => {
  const storeMock = {
    EW: {
      amount: {
        from: {
          value: 150,
          error: false,
        },
      },
    },
  };

  const value = mapStateToProps(storeMock, { name: 'from' });
  expect(value).toEqual({ amount: 150, validationFailed: false });
});
