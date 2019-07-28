import { connect } from 'react-redux';
import Account from './account';
import { forceTwoDigitsAfterDot } from '../../utils/currencies';

const mapStateToProps = ({ EW: { account } }, ownProps) => ({
  value: forceTwoDigitsAfterDot(account[ownProps.currency]),
});

export default connect(mapStateToProps)(Account);
export { mapStateToProps };
