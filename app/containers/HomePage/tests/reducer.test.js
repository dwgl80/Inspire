import { fromJS } from 'immutable';
import homePageReducer from '../reducer';
import { inputQuote } from '../actions';

describe('homePageReducer', () => {
  let testState;
  beforeEach(() => {
    testState = fromJS({
      quote: '',
    });
  });

  it('should return initial state when actions to not match', () => {
    expect(homePageReducer(undefined, {})).toMatchSnapshot();
  });
  it('should properly handle inputQuote action', () => {
    const exampleQuote = 'Shoot for the moon and the stars';
    expect(
      homePageReducer(testState, inputQuote(exampleQuote)),
    ).toMatchSnapshot();
  });
});
