import React from 'react';
import { Spinner } from 'react-bootstrap';

import './styles/loading.scss';

const Loading = ({ isLoading }) => {
    return(
        <div className={`loading-container ${isLoading ? '' : 'hide'}`}>
            <Spinner animation="border" role="status" variant="warning">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    );
};

export default Loading;