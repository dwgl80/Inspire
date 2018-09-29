import { INPUT_SEARCH } from './constants';

const inputSearch = query => ({
  type: INPUT_SEARCH,
  query,
});

export { inputSearch };
