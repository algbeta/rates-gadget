import React from 'react';
import renderer from 'react-test-renderer';
import ExchangeCard from '../exchangeCard';
import currencies, { currencyTypeToSelect } from '../../../utils/currencies';

jest.mock('../../amount-input', () => () => <div className="amountInput" />);
jest.mock('../../account', () => () => <div className="account" />);
jest.mock('../../rate', () => () => <div className="rate" />);
jest.mock('../../currencty-selector', () => () => (
  <div className="currencySelector" />
));

describe('ExchangeCard tests', () => {
  test('ExchangeCard renders correctly', () => {
    const tree = renderer
      .create(
        <ExchangeCard
          currencyFrom={currencies.USD.shortcut}
          currencyTo={currencies.GBP.shortcut}
          selectName={currencyTypeToSelect.from}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
