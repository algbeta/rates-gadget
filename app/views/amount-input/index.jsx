import { connect } from 'react-redux';
import { actions } from '../../state/currencies';
import AmountInput from './amountInput';

const mapStateToProps = ({ exchange: { amount } }) => ({
  exchangedAmount: amount * 1,
});

const mapDispatchToProps = {
  setExchangeAmount: actions.setExchangeAmount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AmountInput);
