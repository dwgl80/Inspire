import { takeEvery, call, put } from "redux-saga/effects";
import { GET_QUOTES, GET_QUOTES_SUCCESS, GET_QUOTES_FAILURE } from '../App/constants.js';
import { getQuote, quotesRetrieved, quotesFailed } from '../App/actions.js';


import axios from 'axios';

const url = '/saved/quotes';

export function* allQuotes() {
  yield takeEvery(GET_QUOTES, getQuotes)
};

const fetchQuotes = () => {
  return axios.get(url);
};

function* getAllQuotes() {
  try {
  const response = yield call(fetchQuotes);
  const quotes = response.data;

  yield put({ })
  }
}

