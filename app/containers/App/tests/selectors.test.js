import { fromJS } from 'immutable';

import { selectLocation } from 'containers/App/selectors';

describe('selectLocation', () => {
  it('should select the location', () => {
    const route = fromJS({
      location: { pathname: '/foo' },
    });
    const mockedState = fromJS({
      route,
    });
    expect(selectLocation(mockedState)).toEqual(route.get('location').toJS());
  });
});
