import axios from 'axios';

import createBrowserHistory from '../history';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  const { data } = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: data });
};

export const submitRequest = (values) => async (dispatch) => {
  const { data } = await axios.post('/api/newRequest', values);

  dispatch({ type: FETCH_USER, payload: data });
  createBrowserHistory.push('/');
};
