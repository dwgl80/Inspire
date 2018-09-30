import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectQuotes = state => state.get('QuotesPage', initialState);

const selectQuery = createSelector(selectQuotes, quotesState =>
  quotesState.get('query'),
);

export { selectQuotes, selectQuery };
