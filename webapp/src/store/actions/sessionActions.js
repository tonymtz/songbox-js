import { apiMeRequest } from '../../lib/apiUserService';
import { setUser } from './index';
import { getSession, saveSession } from '../../lib/localStorage';
import { LOGIN_PAGE } from '../../routes';
import { setAppLoaded, updateAppToken } from './appActions';

/* SYNC OPERATIONS */

/* ASYNC OPERATIONS */

export const recoverSession = () => (dispatch) => {
  const recoveredUser = getSession();

  if (recoveredUser) {
    dispatch(setUser(recoveredUser.user));
    dispatch(updateAppToken(recoveredUser.token));
    dispatch(setAppLoaded());
  } else {
    window.location.href = LOGIN_PAGE;
  }
};

export const createNewSession = (token) => (dispatch) => {
  apiMeRequest(token)
  .then(({ data: user }) => {
      dispatch(setUser(user)); 
      dispatch(updateAppToken(token));
      saveSession(token, user); // rename this saveSessionToLocalStorage
    })
    .catch((err) => {
      console.error(err);
    })
    .then(() => {
      dispatch(setAppLoaded());
    });
};
