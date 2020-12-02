import React from 'react';
import { create } from 'react-test-renderer';

import ParentTest from './ParentTest';

import Help from '../components/Help';

test('Render Help component', () => {
  const component = create(
    <ParentTest>
      <Help />
    </ParentTest>,
  );
});
