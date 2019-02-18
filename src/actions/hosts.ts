import * as redux from 'redux';
import { createAsyncAction } from 'typesafe-actions';
import { getHosts } from '../api/hosts';
import { Host } from '../models/hosts';

export const fetchHosts = createAsyncAction(
  'GET_HOSTS_REQUEST',
  'GET_HOSTS_SUCCESS',
  'GET_HOSTS_FAILURE'
)<void, Host[], Error>();

export const fetchHostsAsync = (): ((dispatch: redux.Dispatch) => void) => (
  dispatch: redux.Dispatch
) => {
  dispatch(fetchHosts.request());
  getHosts()
    .then(response => {
      dispatch(fetchHosts.success(response.data.data));
    })
    .catch(() => {
      dispatch(fetchHosts.failure(Error('Failed to fetch hosts')));
    });
};
