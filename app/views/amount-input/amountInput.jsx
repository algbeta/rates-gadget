import React from 'react';
import PropTypes from 'prop-types';

class AmountInput extends React.PureComponent {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.props.inputExchangeAmount(ev.target.value);
  }

  getInputClassNames() {
    return this.props.validationFailed
      ? 'form-control  is-invalid'
      : 'form-control';
  }

  render() {
    return (
      <React.Fragment>
        <label>Only numbers, +/- and . symbols are allowed</label>
        <input
          className={this.getInputClassNames()}
          onChange={this.handleChange}
        />
      </React.Fragment>
    );
  }
}

AmountInput.propTypes = {
  inputExchangeAmount: PropTypes.func.isRequired,
  validationFailed: PropTypes.bool.isRequired,
};

export default AmountInput;
