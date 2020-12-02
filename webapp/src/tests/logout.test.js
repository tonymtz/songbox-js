import React from 'react';
import { create } from 'react-test-renderer';

import ParentTest from './ParentTest';

import Logout from '../components/Loading';

test('Render Logout component', () => {
  const component = create(
    <ParentTest>
      <Logout />
    </ParentTest>,
  );
});
