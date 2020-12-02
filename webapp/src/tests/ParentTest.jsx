import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../redux/reducers';

const store = createStore(allReducers);

const ParentTest = (props) => (
  <Provider store={store}>
    {props.children}
  </Provider>
);

export default ParentTest;
