import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import AmountInput from '../amountInput';

describe('AmountInput tests', () => {
  test('AmountInput renders correctly', () => {
    const tree = renderer
      .create(
        <AmountInput
          inputExchangeAmount={() => {}}
          name="amountInput"
          amount={150}
          validationFailed={false}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Invalid AmountInput renders correctly', () => {
    const tree = renderer
      .create(
        <AmountInput
          inputExchangeAmount={() => {}}
          name="amountInput"
          amount={150}
          validationFailed
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('AmountInput handler test', () => {
    const handler = jest.fn();
    const wrapper = shallow(
      <AmountInput
        inputExchangeAmount={handler}
        name="amountInput"
        amount={150}
        validationFailed={false}
      />,
    );

    wrapper.find('input').simulate('change', { target: { value: '15' } });

    expect(handler).toHaveBeenCalledWith('15', 'amountInput');
  });
});
