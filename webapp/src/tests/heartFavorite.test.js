import React from 'react';
import { create } from 'react-test-renderer';

import ParentTest from './ParentTest';

import HeartFavorite from '../components/HeartFavorite';

test('Render HeartFavorite component', () => {
  const component = create(
    <ParentTest>
      <HeartFavorite />
    </ParentTest>,
  );
});
