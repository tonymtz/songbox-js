import React from 'react';
import { create } from 'react-test-renderer';

import ParentTest from './ParentTest';

import Settings from '../components/Loading';

test('Render Settings component', () => {
    let component = create(
        <ParentTest>
            <Settings />
        </ParentTest>
    );
});