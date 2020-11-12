import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const AudioProgress = ({ progress }) => {
    return (
        <div>
            <ProgressBar variant="warning" now={progress} />
        </div>
    );
};

export default AudioProgress;