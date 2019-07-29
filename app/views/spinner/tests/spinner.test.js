import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '../index';

describe('Spinner tests', () => {
  test('Spinner renders correctly', () => {
    const tree = renderer.create(<Spinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
