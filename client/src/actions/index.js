import axios from 'axios';

import createBrowserHistory from '../history';
import {
  FETCH_USER,
  FETCH_REQUESTS_USER,
  FETCH_ACCEPTED_REQUESTS_USER,
  FETCH_REQUESTS,
  SET_VIEW_REQUEST,
} from './types';

// =====================================================================================

export const fetchUser = () => async (dispatch) => {
  const { data } = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: data });
};

// =====================================================================================

export const submitRequest = (values) => async (dispatch) => {
  const { data } = await axios.post('/api/newRequest', values);

  dispatch({ type: FETCH_USER, payload: data });
  createBrowserHistory.push('/profile/:id');
};

// =====================================================================================

export const fetchRequestsUser = () => async (dispatch) => {
  const { data } = await axios.get('/api/profile/viewRequests');

  dispatch({ type: FETCH_REQUESTS_USER, payload: data });
};

// =====================================================================================

export const fetchAcceptedRequestsUser = () => async (dispatch) => {
  const { data } = await axios.get('/api/profile/acceptedRequests');

  dispatch({ type: FETCH_ACCEPTED_REQUESTS_USER, payload: data });
};

// =====================================================================================

export const fetchRequests = () => async (dispatch) => {
  const { data } = await axios.get('/api/viewRequests');

  dispatch({ type: FETCH_REQUESTS, payload: data });
};

// =====================================================================================

export const setViewRequest = (details) => (dispatch) => {
  dispatch({ type: SET_VIEW_REQUEST, payload: details });
};
