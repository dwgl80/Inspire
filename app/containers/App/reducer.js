import { fromJS } from 'immutable';
import {
  GET_QUOTES,
  GET_QUOTES_SUCCESS,
  GET_QUOTES_FAILURE,
  SAVE_QUOTE,
  SAVE_QUOTE_SUCCESS,
  SAVE_QUOTE_FAILURE,
  CHANGE_LIKED,
} from './constants';

export const initialState = fromJS({
  fetching: false,
  saving: false,
  quotes: [],
  error: false,
  recentlySaved: [],
});

const appReducer = (state = initialState, action) => {
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
    case SAVE_QUOTE:
      return state.set('saving', true).set('error', false);
    case SAVE_QUOTE_SUCCESS: {
      const recentQuotes = state.get('recentlySaved');
      return state
        .set('saving', false)
        .set('error', false)
        .set('recentlySaved', [...recentQuotes, action.quote]);
    }
    case SAVE_QUOTE_FAILURE:
      return state.set('saving', false).set('error', action.error);
    case CHANGE_LIKED: {
      const quotes = state.get('quotes');
      const copiedQuotes = quotes.slice();
      const id = action.id;
      for (const item of copiedQuotes) {
        if (item.id === id) {
          item.liked = !item.liked;
        }
      }
      return state.set('quotes', copiedQuotes);
    }
    default:
      return state;
  }
};

export default appReducer;
