import { fromJS } from 'immutable';

import { INPUT_QUOTE, SAVE_QUOTE } from './constants.js';

export const initialState = fromJS({
  quote: '',
});

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_QUOTE: {
      return state.set('quote', action.quote);
    }
    case SAVE_QUOTE: {
      return state.set('quote', action.quote);
    }
    default:
      return state;
  }
};

export default homePageReducer;
