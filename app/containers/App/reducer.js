import { fromJS } from 'immutable';
import {
  GET_QUOTES,
  GET_QUOTES_SUCCESS,
  GET_QUOTES_FAILURE,
} from './constants';

const initializeState = fromJS({
  fetching: false,
  quotes: [],
  error: false,
});

const appReducer = (state = initializeState, action) => {
  switch (action.type) {
    case GET_QUOTES:
      return state.set('fetching', true).set('error', false);
    case GET_QUOTES_SUCCESS:
      return state
        .set('fetching', false)
        .set('error', false)
        .set('quotes', action.quotes);
    case GET_QUOTES_FAILURE:
      return state
        .set('fetching', false)
        .set('error', action.error)
        .set('quotes', []);
    default:
      return state;
  }
};

export default appReducer;
