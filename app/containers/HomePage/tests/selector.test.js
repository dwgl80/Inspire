import { fromJS } from 'immutable';
import { selectHome, selectQuote } from '../selector';

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

describe('selectQuote', () => {
  it('should select the proper quote state', () => {
    const quote = 'Shoot for the moon and the stars';
    const mockedState = fromJS({
      HomePage: {
        quote,
      },
    });
    expect(selectQuote(mockedState)).toEqual(quote);
  });
});
