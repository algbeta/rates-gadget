import { connect } from 'react-redux';
import Account from './account';

const mapStateToProps = ({ EW: { account } }, ownProps) => ({
  value: account[ownProps.currency],
});

export default connect(mapStateToProps)(Account);
