import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { GET_QUOTES, SAVE_QUOTE } from '../App/constants';
import {
  quotesRetrieved,
  quotesFailed,
  saveSuccess,
  saveFailed,
} from '../App/actions';

import { makeSelectQuote } from './selector';

// export function* allQuotes() {
//   yield takeLatest(GET_QUOTES, getAllQuotes);
// }

// const fetchQuotes = url => axios.get(url);

// function* getAllQuotes() {
//   const url = '/saved/quotes';
//   try {
//     const response = yield call(fetchQuotes, url);
//     const quotes = response.data;
//     yield put(quotesRetrieved(quotes));
//   } catch (err) {
//     yield put(quotesFailed(err));
//   }
// }

export default function* saveAllQuotes() {
  yield takeEvery(SAVE_QUOTE, saveQuotes);
}

const postQuotes = (url, param) => axios.post(url, param);

export function* saveQuotes() {
  const url = '/saved/quotes';
  const quote = yield select(makeSelectQuote());
  const param = { quote };
  try {
    const response = yield call(postQuotes, url, param);
    const recentQuote = param.quote;
    yield put(saveSuccess(recentQuote));
  } catch (err) {
    yield put(saveFailed(err));
  }
}
