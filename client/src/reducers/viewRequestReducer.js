import { SET_VIEW_REQUEST } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_VIEW_REQUEST:
      return action.payload;
    default:
      return state;
  }
};
