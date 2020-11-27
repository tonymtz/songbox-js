import React from 'react';
import { create } from 'react-test-renderer';

import ParentTest from './ParentTest';

import Profile from '../components/Loading';

test('Render Profile component', () => {
    let component = create(
        <ParentTest>
            <Profile />
        </ParentTest>
    );
});