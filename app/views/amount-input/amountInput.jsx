import React from 'react';
import PropTypes from 'prop-types';

class AmountInput extends React.PureComponent {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const { inputExchangeAmount, name } = this.props;
    inputExchangeAmount(ev.target.value, name);
  }

  getInputClassNames() {
    return this.props.validationFailed
      ? 'form-control  is-invalid'
      : 'form-control';
  }

  render() {
    return (
      <React.Fragment>
        <span>Only numbers, - and . are allowed</span>
        <input
          name={this.props.name}
          className={this.getInputClassNames()}
          onChange={this.handleChange}
          value={this.props.amount}
        />
      </React.Fragment>
    );
  }
}

AmountInput.propTypes = {
  inputExchangeAmount: PropTypes.func.isRequired,
  validationFailed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default AmountInput;
