import axios from 'axios';
import config from '../config';
import { logError } from './errorLogger';
// import { destroySession } from './localStorage';

const { apiGatewayUrl } = config;

const onError = (error, reject) => {
  logError(error);

  if (error.response.status === 401) { // probably because token has expired
    // destroySession();
    // window.location = '/login?token-expired';
  }

  reject(error);
};

export const post = (url, body, resolve, reject) => axios.post(`${apiGatewayUrl}${url}`, body, {
  headers: { 'Content-Type': 'application/json' },
})
  .then(resolve)
  .catch((error) => {
    logError(error);
    reject(error);
  });

export const getWithAuth = (url, token, resolve, reject) => {
  axios.get(`${apiGatewayUrl}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch((error) => onError(error, reject));
};

export const postWithAuth = (url, token, body, resolve, reject) => {
  axios.post(`${apiGatewayUrl}${url}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch((error) => onError(error, reject));
};

export default {
  post,
  getWithAuth,
  postWithAuth,
};
