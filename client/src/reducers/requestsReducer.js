import { FETCH_REQUESTS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_REQUESTS:
      return action.payload;
    default:
      return state;
  }
};
