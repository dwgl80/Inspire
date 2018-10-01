import { put, takeEvery } from 'redux-saga/effects';

import { SAVE_QUOTE } from 'containers/App/constants';
import { saveSuccess, saveFailed } from 'containers/App/actions';

import saveAllQuotes, { saveQuotes } from '../saga';

const quote = 'shoot for the moon and the stars';

describe('saveQuotes Saga', () => {
  let saveQuotesGenerator;

  beforeEach(() => {
    saveQuotesGenerator = saveQuotes();

    const selectDescriptor = saveQuotesGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = saveQuotesGenerator.next(quote).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the saveSuccess action if it saves the data successfully', () => {
    const response = quote;
    const putDescriptor = saveQuotesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(saveSuccess(response)));
  });

  it('should call the saveFailed action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = saveQuotesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(saveFailed(response)));
  });
});

describe('saveAllQuotes Saga', () => {
  const saveAllQuotesSaga = saveAllQuotes();

  it('should start task to watch for SAVE_QUOTE action', () => {
    const takeEveryDescriptor = saveAllQuotesSaga.next().value;
    expect(takeEveryDescriptor).toEqual(takeEvery(SAVE_QUOTE, saveQuotes));
  });
});
