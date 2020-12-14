import { APP_LOADED, APP_LOADING, APP_TOKEN_UPDATE } from '../constants';

/* SYNC OPERATIONS */

export const setAppIsLoading = () => ({ type: APP_LOADING });
export const setAppLoaded = () => ({ type: APP_LOADED });
export const updateAppToken = (payload) => ({ type: APP_TOKEN_UPDATE, payload });

/* ASYNC OPERATIONS */
