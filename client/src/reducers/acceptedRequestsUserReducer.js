import { FETCH_ACCEPTED_REQUESTS_USER } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ACCEPTED_REQUESTS_USER:
      return action.payload;
    default:
      return state;
  }
};
