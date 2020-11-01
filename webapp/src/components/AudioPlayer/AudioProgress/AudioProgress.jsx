import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';

const AudioProgress = ({ process }) => {
    return (
        <div>
            <ProgressBar variant="warning" now={process} />
        </div>
    );
};

export default AudioProgress;