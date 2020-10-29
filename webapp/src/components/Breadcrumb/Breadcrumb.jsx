import React from 'react';

import Home from '../Home';

import './style/breadcrumb.scss';

const Directory = ({ route, setRoute }) => {
    return (
        <div className="directory-container">
            <div className="sub-directory-container">
                <Home 
                    setRoute={setRoute}
                />
                <h4 className="title">{route}</h4>
            </div>
        </div>
    );
};

export default Directory;