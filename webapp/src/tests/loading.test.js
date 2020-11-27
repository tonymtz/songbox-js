import React from 'react';
import { create } from 'react-test-renderer';

import ParentTest from './ParentTest';

import Loading from '../components/Loading';

test('Render loading component', () => {
    let component = create(
        <ParentTest>
            <Loading />
        </ParentTest>
    );
});