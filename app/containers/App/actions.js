import {
  GET_QUOTES,
  GET_QUOTES_SUCCESS,
  GET_QUOTES_FAILURE,
} from './constants';

const getQuote = () => ({
  type: GET_QUOTES,
});

const quotesRetrieved = quotes => ({
  type: GET_QUOTES_SUCCESS,
  quotes,
});

const quotesFailed = error => ({
  type: GET_QUOTES_FAILURE,
  error,
});

export { getQuote, quotesRetrieved, quotesFailed };
