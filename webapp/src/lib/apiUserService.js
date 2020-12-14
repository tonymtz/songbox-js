import Promise from 'bluebird';
import { getWithAuth } from './apiService';

export const apiMeRequest = (token) => new Promise((resolve, reject) => {
  getWithAuth('/api/me', token, resolve, reject);
});
