import React from 'react';
import PropTypes from 'prop-types';

const AmountInput = ({
  inputExchangeAmount,
  name,
  amount,
  validationFailed,
}) => {
  const changeHandler = ev => {
    inputExchangeAmount(ev.target.value, name);
  };

  const getInputClassNames = () =>
    validationFailed ? 'form-control  is-invalid' : 'form-control';

  return (
    <div className="form-group">
      <label htmlFor={name}>Only numbers, - and . are allowed</label>
      <input
        name={name}
        className={getInputClassNames()}
        onChange={changeHandler}
        value={amount}
      />
    </div>
  );
};

AmountInput.propTypes = {
  inputExchangeAmount: PropTypes.func.isRequired,
  validationFailed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default AmountInput;
