import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectQuote = state => state.get('HomePage', initialState);

const quoteSelector = createSelector(selectQuote, homeState =>
  homeState.get('quote', initialState),
);

export { quoteSelector };
