import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');
const selectGlobal = state => state.get('global');

const makeSelectLocation = createSelector(selectRoute, routeState =>
  routeState.get('location').toJS(),
);

const makeSelectFetching = createSelector(selectGlobal, globalState =>
  globalState.get('fetching'),
);

const makeSelectSaving = createSelector(selectGlobal, globalState =>
  globalState.get('saving'),
);

const makeSelectQuotes = createSelector(selectGlobal, globalState =>
  globalState.get('quotes'),
);

const makeSelectError = createSelector(selectGlobal, globalState =>
  globalState.get('error'),
);

const makeSelectRecentlySaved = createSelector(selectGlobal, globalState =>
  globalState.get('recentlySaved'),
);

export {
  selectGlobal,
  makeSelectLocation,
  makeSelectFetching,
  makeSelectSaving,
  makeSelectQuotes,
  makeSelectError,
  makeSelectRecentlySaved,
};
