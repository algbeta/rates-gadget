import { connect } from 'react-redux';
import { actions } from '../../state/amount';
import AmountInput from './amountInput';

const mapStateToProps = ({ EW: { amount } }) => ({
  validationFailed: amount.error,
});

const mapDispatchToProps = {
  inputExchangeAmount: actions.inputExchangeAmount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AmountInput);
