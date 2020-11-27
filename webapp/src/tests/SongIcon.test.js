import React from 'react';
import { create } from 'react-test-renderer';

import ParentTest from './ParentTest';

import SongIcon from '../components/SongIcon';

test('Render SongIcon component', () => {
    let component = create(
        <ParentTest>
            <SongIcon />
        </ParentTest>
    );
});