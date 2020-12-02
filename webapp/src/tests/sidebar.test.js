import React from 'react';
import {
  Switch, Route, BrowserRouter, Router,
} from 'react-router-dom';
import { create } from 'react-test-renderer';

import ParentTest from './ParentTest';

import Sidebar from '../components/Sidebar';

test('Render Sidebar component', () => {
  const component = create(
    <ParentTest>
      <BrowserRouter>
        <Switch>
          <Route path="/app" render={Sidebar} />
        </Switch>
      </BrowserRouter>
    </ParentTest>,
  );
});
