import { CHANGE_LIKED } from './constants';

const changeLiked = id => ({
  type: CHANGE_LIKED,
  id,
});

export { changeLiked };
