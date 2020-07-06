import axios from 'axios';

import createBrowserHistory from '../history';
import { FETCH_USER, FETCH_REQUESTS_USER, FETCH_REQUESTS } from './types';

export const fetchUser = () => async (dispatch) => {
  const { data } = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: data });
};

export const submitRequest = (values) => async (dispatch) => {
  const { data } = await axios.post('/api/newRequest', values);

  dispatch({ type: FETCH_USER, payload: data });
  createBrowserHistory.push('/profile/:id');
};

export const fetchRequestsUser = (values) => async (dispatch) => {
  const { data } = await axios.get('/api/profile/viewRequests');

  dispatch({ type: FETCH_REQUESTS_USER, payload: data });
};

export const fetchRequests = (values) => async (dispatch) => {
  const { data } = await axios.get('/api/viewRequests');

  dispatch({ type: FETCH_REQUESTS, payload: data });
};
