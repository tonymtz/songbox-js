import React from 'react';
import { create } from 'react-test-renderer';

import ParentTest from './ParentTest';

import Home from '../components/Help';

test('Render Home component', () => {
    let component = create(
        <ParentTest>
            <Home />
        </ParentTest>
    );
});