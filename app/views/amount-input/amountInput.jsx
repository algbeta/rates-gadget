import React from 'react';
import PropTypes from 'prop-types';

class AmountInput extends React.PureComponent {
  constructor() {
    super();
    this.validate = this.validate.bind(this);
  }

  // in case quantity of inputs/ types of validation increase
  // I would separate validation logic or use a solution similar to redux-forms
  validate(value) {
    return /^\d+$/.test(value);
  }

  handleChange(ev) {
    const {
      target: { value },
    } = ev;
    if (this.validate(value)) {
      this.props.setExchangeAmount(ev.target.value);
     
    }
  }

  render() {
    return <input onChange={this.handleChange} />;
  }
}

AmountInput.propTypes = {
  setExchangeAmount: PropTypes.func.isRequired,
  exchangedAmount: PropTypes.number,
}

export default AmountInput;
