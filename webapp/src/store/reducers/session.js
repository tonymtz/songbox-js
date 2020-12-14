/*
 *
 * reducers/session.JS
 *
 * Session information is stored here, this is, token & user info.
 *
 */

import { SESSION_DELETE, SESSION_RECOVER, SESSION_UPDATE } from '../constants';
import { getSession } from '../../lib/localStorage';

const user = {};
const token = null;
const isLogged = false;

const initState = {
  user,
  isLogged,
};

export default (state = initState, action) => {
  switch (action.type) {
  case SESSION_UPDATE:
    return {
      ...state,
      user: action.payload.user,
      isLogged: true,
    };
  case SESSION_DELETE:
    return {
      ...initState,
    };
  case SESSION_RECOVER:
    // eslint-disable-next-line no-case-declarations
    const savedSession = getSession();
    return savedSession ? {
      ...savedSession,
      isLogged: true,
    } : state;
  default:
    return state;
  }
};
