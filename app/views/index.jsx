import React from 'react';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import rootSaga from '../state/common/rootSaga';
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

export default compose(withSaga)(App);
