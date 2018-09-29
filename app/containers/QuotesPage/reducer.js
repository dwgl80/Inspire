import { fromJS } from 'immutable';

import { INPUT_SEARCH } from './constants';

export const initialState = fromJS({
  query: '',
});

const quotesPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_SEARCH: {
      return state.set('query', action.query);
    }
    default:
      return state;
  }
};

export default quotesPageReducer;
