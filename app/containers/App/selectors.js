import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');
const selectGlobal = state => state.get('global');

const selectLocation = createSelector(selectRoute, routeState =>
  routeState.get('location').toJS(),
);

const selectFetching = createSelector(selectGlobal, globalState =>
  globalState.get('fetching'),
);

const selectSaving = createSelector(selectGlobal, globalState =>
  globalState.get('saving'),
);

const selectQuotes = createSelector(selectGlobal, globalState =>
  globalState.get('quotes'),
);

const selectError = createSelector(selectGlobal, globalState =>
  globalState.get('error'),
);

const selectRecentlySaved = createSelector(selectGlobal, globalState =>
  globalState.get('recentlySaved'),
);

const selectSearchedQuotes = createSelector(selectGlobal, globalState =>
  globalState.get('searchedQuotes'),
);

export {
  selectGlobal,
  selectLocation,
  selectFetching,
  selectSaving,
  selectQuotes,
  selectError,
  selectRecentlySaved,
  selectSearchedQuotes,
};
