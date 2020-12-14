import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createNewSession, recoverSession } from '../../store/actions/sessionActions';
import AppComponent from './App.component';
import LoadingComponent from './Loading.component';

const App = () => {
  const isAppLoaded = useSelector((state) => state.app.get('isLoaded'));
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const retrievedToken = urlParams.get('token');

    if (retrievedToken) {
      dispatch(createNewSession(retrievedToken));
      window.history.replaceState({}, document.title, '/app');
    } else {
      dispatch(recoverSession());
      window.history.replaceState({}, document.title, '/app');
    }
  }, [dispatch]);

  return isAppLoaded ? <AppComponent /> : <LoadingComponent />;
};

export default App;
