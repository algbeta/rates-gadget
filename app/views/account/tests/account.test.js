import React from 'react';
import renderer from 'react-test-renderer';
import Account from '../account';
import currencies from '../../../utils/currencies';

test('Account renders correctly', () => {
  const tree = renderer
    .create(<Account currency={currencies.USD.shortcut} value={1500} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
