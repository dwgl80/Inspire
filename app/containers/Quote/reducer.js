import { fromJS } from 'immutable';

import { makeSelectQuotes } from 'containers/App/selectors';
import { CHANGE_LIKED } from './constants';
import initialState from 'containers/App/reducer';

// export const initialState = fromJS({
//   quotes: [],
// });

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LIKED: {
      const quotes = [];
      const id = action.id;
      for (const item of quotes) {
        if (item.id === id) {
          item.liked = !item.liked;
        }
      }
      return state.set('quotes', quotes);
    }
    default:
      return state;
  }
};

export default quoteReducer;
