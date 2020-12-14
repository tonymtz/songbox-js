import Promise from 'bluebird';
import { getWithAuth } from './apiService';

export const apiFetchFiles = (token, path) => new Promise((resolve, reject) => {
  getWithAuth(`/api/files/${path}`, token, resolve, reject);
});
