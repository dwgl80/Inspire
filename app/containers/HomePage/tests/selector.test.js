import { fromJS } from 'immutable';

import { selectHome, selectQuote } from '../selectors';

describe('selectHome', () => {
  it('should select the HomePage state', () => {
    const homeState = fromJS({
      data: {},
    });
    const mockedState = fromJS({
      HomePage: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectUsername', () => {
  it('should select the username', () => {
    const quote = 'Shoot for the moon and the stars';
    const mockedState = fromJS({
      HomePage: {
        quote,
      },
    });
    expect(selectQuote(mockedState)).toEqual(quote);
  });
});
