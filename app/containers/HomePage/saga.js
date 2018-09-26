import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { GET_QUOTES, SAVE_QUOTES } from '../App/constants.js';
import {
  quotesRetrieved,
  quotesFailed,
  saveSuccess,
  saveFailed,
} from '../App/actions.js';

import { quoteSelector } from './selectors';

const url = '/saved/quotes';

export function* allQuotes() {
  yield takeLatest(GET_QUOTES, getAllQuotes);
}

const fetchQuotes = url => axios.get(url);

function* getAllQuotes() {
  try {
    const response = yield call(fetchQuotes, url);
    const quotes = response.data;
    yield put(quotesRetrieved(quotes));
  } catch (err) {
    yield put(quotesFailed(err));
  }
}

export function* saveAllQuotes() {
  yield takeEvery(SAVE_QUOTES, saveQuotes);
}

const postQuotes = (url, param) => axios.post(url, param);

function* saveQuotes() {
  const quote = yield select(quoteSelector());
  const param = { quote };
  try {
    const response = yield call(postQuotes, url, param);
  } catch (err) {
    yield put();
  }
}
