import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('HomePage', initialState);

const makeSelectQuote = createSelector(selectHome, homeState =>
  homeState.get('quote'),
);

export { selectHome, makeSelectQuote };
