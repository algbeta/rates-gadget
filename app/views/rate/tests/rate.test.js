import React from 'react';
import renderer from 'react-test-renderer';
import Rate from '../rate';
import currencies from '../../../utils/currencies';

describe('Rate tests', () => {
  test('Rate renders correctly', () => {
    const tree = renderer
      .create(
        <Rate
          from={currencies.GBP.shortcut}
          to={currencies.EUR.shortcut}
          rate={1.2}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
