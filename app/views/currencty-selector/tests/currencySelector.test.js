import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CurrencySelector from '../currencySelector';
import currencies from '../../../utils/currencies';

describe('CurrencySelector tests', () => {
  test('CurrencySelector renders correctly', () => {
    const tree = renderer
      .create(
        <CurrencySelector
          name="currencySelector"
          selected={currencies.USD.shortcut}
          setSelectedCurrency={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('CurrencySelector handler test', () => {
    const handler = jest.fn();
    const wrapper = shallow(
      <CurrencySelector
        name="currencySelector"
        selected={currencies.GBP.shortcut}
        setSelectedCurrency={handler}
      />,
    );

    wrapper
      .find('select')
      .simulate('change', { target: { value: currencies.USD.shortcut } });

    expect(handler).toHaveBeenCalledWith(
      currencies.USD.shortcut,
      'currencySelector',
    );
  });
});
