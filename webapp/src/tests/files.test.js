import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';

import ParentTest from './ParentTest';

import FilesComponent from '../components/Files';
import LinkToFolder from '../components/Files/LinkToFolder';
import LinkToSong from '../components/Files/LinkToSong';

test('Test Files component', () => {
  const component = create(
    <ParentTest>
      <FilesComponent />
    </ParentTest>,
  );
});

test('Test LinkToFolder component', () => {
  const component = create(
    <ParentTest>
      <BrowserRouter>
        <Route path="/" component={LinkToFolder} />
      </BrowserRouter>
    </ParentTest>,
  );
});

test('Test LinkToSong component', () => {
  const component = create(
    <ParentTest>
      <LinkToSong />
    </ParentTest>,
  );
});
