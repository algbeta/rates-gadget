import React from 'react';
import PropTypes from 'prop-types';
import currencies from '../../utils/currencies';
import CurrencySelector from '../currencty-selector';

class ExchangeCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      from: currencies.EUR.shortcut,
      to: currencies.USD.shortcut,
    };
    this.onCurrencyChange = this.onCurrencyChange.bind(this);
    this.onAmountInput = this.onAmountInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchCurrencies();
  }

  onCurrencyChange(ev) {
    const {
      target: { name, value },
    } = ev;
    this.setState({ [name]: value });
  }

  onAmountInput(ev) {
    this.props.setExchangeAmount(ev.target.value);
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
        <input name="amount" onChange={this.onAmountInput} />
        <CurrencySelector
          name="to"
          selected={this.state.to}
          handler={this.onCurrencyChange}
        />
        <span>{this.props.exchangedAmount}</span>
      </div>
    );
  }
}

ExchangeCalculator.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  setExchangeAmount: PropTypes.func.isRequired,
  exchangedAmount: PropTypes.number,
};

ExchangeCalculator.defaultProps = {
  exchangedAmount: 1,
};

export default ExchangeCalculator;
