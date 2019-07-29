import React from 'react';
import renderer from 'react-test-renderer';
import ExchangeCalculator from '../exchangeCalculator';

jest.mock('../exchangeCard', () => () => <div className="exchangeCard" />);
jest.mock('../../spinner', () => () => <div className="spinner" />);

describe('ExchangeCalculator tests', () => {
  test('ExchangeCalculator renders correctly', () => {
    const tree = renderer
      .create(
        <ExchangeCalculator
          fetchCurrenciesPeriodically={() => {}}
          transfer={() => {}}
          amount={150}
          from="from"
          to="to"
          validationFailed={false}
          sameCurrency={false}
          areCurrenciesLoaded
          transactionError=""
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ExchangeCalculator with transaction error', () => {
    const tree = renderer
      .create(
        <ExchangeCalculator
          fetchCurrenciesPeriodically={() => {}}
          transfer={() => {}}
          amount={150}
          from="from"
          to="to"
          validationFailed={false}
          sameCurrency={false}
          areCurrenciesLoaded
          transactionError="Something went wrong!"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("ExchangeCalculator renders spinner when currencies aren't loaded", () => {
    const tree = renderer
      .create(
        <ExchangeCalculator
          fetchCurrenciesPeriodically={() => {}}
          transfer={() => {}}
          amount={150}
          from="from"
          to="to"
          validationFailed={false}
          sameCurrency={false}
          areCurrenciesLoaded={false}
          transactionError=""
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ExchangeCalculator method tests', () => {
  test('componentDidMount', () => {
    const context = {
      props: {
        fetchCurrenciesPeriodically: jest.fn(),
      },
    };

    ExchangeCalculator.prototype.componentDidMount.call(context);
    expect(context.props.fetchCurrenciesPeriodically).toHaveBeenCalledWith(
      true,
    );
  });

  test('componentWillUnmount', () => {
    const context = {
      props: {
        fetchCurrenciesPeriodically: jest.fn(),
      },
    };

    ExchangeCalculator.prototype.componentWillUnmount.call(context);
    expect(context.props.fetchCurrenciesPeriodically).toHaveBeenCalledWith(
      false,
    );
  });
});
