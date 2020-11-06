import React from 'react';
import { ProgressBar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/progress.scss';

const AudioProgress = ({ process }) => {
    return (
        <div>
            <ProgressBar variant="warning" now={process} />
        </div>
    );
};

export default AudioProgress;