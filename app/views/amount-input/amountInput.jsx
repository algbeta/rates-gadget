import React from 'react';
import PropTypes from 'prop-types';

class AmountInput extends React.PureComponent {
  constructor() {
    super();
    this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validate(value) {
    return /^\d+$/.test(value);
  }

  handleChange(ev) {
    const {
      target: { value },
    } = ev;
    debugger;
    if (this.validate(value)) {
      this.props.setExchangeAmount(ev.target.value);
    }
  }

  render() {
    return (
      <input onChange={this.handleChange} value={this.props.exchangedAmount} />
    );
  }
}

AmountInput.propTypes = {
  setExchangeAmount: PropTypes.func.isRequired,
  exchangedAmount: PropTypes.number,
};

export default AmountInput;
