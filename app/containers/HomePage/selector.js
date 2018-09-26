import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectQuote = (state = state.get('quote', initialState));

const quoteSelector = createSelector(selectQuote);
