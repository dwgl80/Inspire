import {
  GET_QUOTES,
  GET_QUOTES_SUCCESS,
  GET_QUOTES_FAILURE,
  SAVE_QUOTE,
  SAVE_QUOTE_SUCCESS,
  SAVE_QUOTE_FAILURE,
} from './constants';

const saveQuote = () => ({
  type: SAVE_QUOTE,
});

const saveSuccess = quote => ({
  type: SAVE_QUOTE_SUCCESS,
  quote,
});

const saveFailed = error => ({
  type: SAVE_QUOTE_FAILURE,
  error,
});

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

export {
  getQuote,
  quotesRetrieved,
  quotesFailed,
  saveQuote,
  saveSuccess,
  saveFailed,
};
