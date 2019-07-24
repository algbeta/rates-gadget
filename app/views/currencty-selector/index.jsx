import { connect } from 'react-redux';
import { actions } from '../../state/currencies';
import CurrencySelector from './currencySelector';

const mapStateToProps = ({ EW: { exchange } }, ownProps) => ({
  selected: exchange[ownProps.name],
});

const mapDispatchToProps = {
  setSelectedCurrency: actions.setSelectedCurrency,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencySelector);
