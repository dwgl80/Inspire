import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_QUOTES } from '../App/constants';

import { quotesRetrieved, quotesFailed } from '../App/actions';

export default function* allQuotes() {
  yield takeLatest(GET_QUOTES, getAllQuotes);
}

const fetchQuotes = url => axios.get(url);

function* getAllQuotes() {
  const url = '/saved/quotes';
  try {
    const response = yield call(fetchQuotes, url);
    const quotes = response.data;
    yield put(quotesRetrieved(quotes));
  } catch (err) {
    yield put(quotesFailed(err));
  }
}
