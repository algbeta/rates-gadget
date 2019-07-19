import React from 'react';
import currencies from '../../utils/currencies';
import CurrencySelector from '../currencty-selector';

class ExchangeCalculator extends React.Component {
  constructor() {
    super();
    // set up exchange currencies by default
    this.state = {
      from: currencies.EUR.shortcut,
      to: currencies.USD.shortcut,
    };
    this.onCurrencyChange = this.onCurrencyChange.bind(this);
  }

  onCurrencyChange(ev) {
    const {
      target: { name, value },
    } = ev;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Currency exchange</h1>
        <CurrencySelector
          name="from"
          selected={this.state.from}
          handler={this.onCurrencyChange}
        />
        <CurrencySelector
          name="to"
          selected={this.state.to}
          handler={this.onCurrencyChange}
        />
      </div>
    );
  }
}

export default ExchangeCalculator;
