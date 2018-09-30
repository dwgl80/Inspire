import { takeEvery, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { SAVE_QUOTE } from '../App/constants';
import { saveSuccess, saveFailed } from '../App/actions';

import { selectQuote } from './selector';

export default function* saveAllQuotes() {
  yield takeEvery(SAVE_QUOTE, saveQuotes);
}

const postQuotes = (url, param) => axios.post(url, param);

export function* saveQuotes() {
  const url = '/saved/quotes';
  const quote = yield select(selectQuote);
  const param = { quote };
  try {
    const response = yield call(postQuotes, url, param);
    const recentQuote = param.quote;
    yield put(saveSuccess(recentQuote));
  } catch (err) {
    yield put(saveFailed(err));
  }
}
