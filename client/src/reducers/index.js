import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducer';
import requestsReducers from './requestsReducer';
import requestsUserReducers from './requestsUserReducer';
import viewRequestReducer from './viewRequestReducer';
import acceptedRequestsUserReducer from './acceptedRequestsUserReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  requests: requestsReducers,
  requestsUser: requestsUserReducers,
  viewRequest: viewRequestReducer,
  acceptedRequestsUser: acceptedRequestsUserReducer,
});
