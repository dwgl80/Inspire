import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectQuotes = state => state.get('QuotesPage', initialState);

const makeSelectQuery = createSelector(selectQuotes, quotesState =>
  quotesState.get('query'),
);

export { selectQuotes, makeSelectQuery };
