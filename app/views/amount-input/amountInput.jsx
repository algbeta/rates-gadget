import React from 'react';
import PropTypes from 'prop-types';

class AmountInput extends React.PureComponent {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
    };
  }

  handleChange(ev) {
    this.setState({ value: ev.target.value });
    this.props.inputExchangeAmount(ev.target.value);
  }

  getInputClassNames() {
    return this.props.validationFailed
      ? 'form-control  is-invalid'
      : 'form-control';
  }

  componentDidUpdate(prevProps) {
    if (prevProps.amount && this.props.amount === 0) {
      this.setState({
        value: '',
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <label>Only numbers, +/- and . symbols are allowed</label>
        <input
          value={this.state.value}
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
