import { fromJS } from 'immutable';

import { INPUT_QUOTE } from './constants';

export const initialState = fromJS({
  quote: '',
});

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_QUOTE: {
      return state.set('quote', action.quote);
    }
    default:
      return state;
  }
};

export default homePageReducer;
