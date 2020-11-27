import React from 'react';
import { create } from 'react-test-renderer';

import ParentTest from './ParentTest';

import Main from '../components/Loading';

test('Render Main component', () => {
    let component = create(
        <ParentTest>
            <Main />
        </ParentTest>
    );
});