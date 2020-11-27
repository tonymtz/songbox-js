import React from 'react';
import { create } from 'react-test-renderer';

import ParentTest from './ParentTest';

import NotFound from '../components/NotFound';

test('Render NotFound component', () => {
    let component = create(
        <ParentTest>
            <NotFound />
        </ParentTest>
    );
});