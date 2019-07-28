import React from 'react';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { DAEMON } from 'utils/constants';
import rootSaga from '../state/common/rootSaga';
import rootReducer from '../state/common/rootReducer';
import ExchangeCalculator from './exchange-calculator';
import ErrorBoundary from './error-boundary';

const withSaga = injectSaga({
  key: 'ExchangeCalculator',
  saga: rootSaga,
  mode: DAEMON,
});

const App = () => (
  <ErrorBoundary>
    <ExchangeCalculator />
  </ErrorBoundary>
);

const withReducer = injectReducer({ key: 'EW', reducer: rootReducer });

export default compose(
  withReducer,
  withSaga,
)(App);
