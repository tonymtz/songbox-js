import React from 'react';
import { create } from 'react-test-renderer';

import ParentTest from './ParentTest';
import Favorites from '../components/Favorites';

test('Render Favorites component', () => {
  const component = create(
    <ParentTest>
      <Favorites
        pageNumber={1}
      />
    </ParentTest>,
  );
});
