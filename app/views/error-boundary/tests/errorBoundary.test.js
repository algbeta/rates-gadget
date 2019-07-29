import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ErrorBoundary from '../index';

describe('ErrorBoundary tests', () => {
  test('ErrorBoundary renders correctly', () => {
    const tree = renderer
      .create(
        <ErrorBoundary>
          <div>Child</div>
        </ErrorBoundary>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ErrorBoundary with error', () => {
    const NestComponent = () => null;

    const wrapper = shallow(
      <ErrorBoundary>
        <NestComponent />
      </ErrorBoundary>,
    );

    wrapper.find('NestComponent').simulateError(new Error('error'));
    expect(wrapper.state()).toEqual({ hasError: true });
  });
});
