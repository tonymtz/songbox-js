import React from 'react';
import Cookie from 'universal-cookie';
import { useDispatch } from 'react-redux';

import { changeAuth } from '../../store/actions';

const Logout = () => {
  const dispatch = useDispatch();
  const changeAuthState = (newState) => dispatch(changeAuth(newState));

  const cookie = new Cookie();
  cookie.remove('dbx-token', { path: '/' });
  changeAuthState(false);

  return (
    <div />
  );
};

export default Logout;
