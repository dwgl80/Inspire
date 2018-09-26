import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectQuote = state => state.get('HomePage', initialState);

const makeSelectQuote = createSelector(selectQuote, homeState =>
  homeState.get('quote'),
);

export { selectQuote, makeSelectQuote };
