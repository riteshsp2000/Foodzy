import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducer';
import requestsReducers from './requestsReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  requests: requestsReducers,
});
