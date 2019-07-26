import { connect } from 'react-redux';
import { actions } from '../../state/account';
import CurrencySelector from './currencySelector';

const mapStateToProps = ({ EW: { account } }, ownProps) => ({
  selected: account[ownProps.name],
});

const mapDispatchToProps = {
  setSelectedCurrency: actions.setSelectedCurrency,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencySelector);
