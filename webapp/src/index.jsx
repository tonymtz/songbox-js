import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppContainer from './domains/core';
import store from './store';
import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
