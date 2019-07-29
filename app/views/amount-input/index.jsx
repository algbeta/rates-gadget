import { connect } from 'react-redux';
import { actions } from '../../state/amount';
import AmountInput from './amountInput';

const mapStateToProps = ({ EW: { amount } }, ownProps) => ({
  validationFailed: amount[ownProps.name].error,
  amount: amount[ownProps.name].value,
});

const mapDispatchToProps = {
  inputExchangeAmount: actions.inputExchangeAmount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AmountInput);
export { mapStateToProps };
