import React from 'react';
import { create } from 'react-test-renderer';

import ParentTest from './ParentTest';

import Loading from '../components/Loading';

test('Render loading component', () => {
  const component = create(
    <ParentTest>
      <Loading />
    </ParentTest>,
  );
});
