import { createSelector } from 'reselect';
import { initialState } from 'containers/Quote/reducer';

const selectQuote = state => state.get('Quote', initialState);

const makeSelectQuotes = createSelector(selectQuote, quoteState =>
  quoteState.get('quotes'),
);

export { selectQuote, makeSelectQuotes };
