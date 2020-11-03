import React, { useState, useEffect} from 'react';

import Home from '../Home';

import './style/breadcrumb.scss';

const Directory = ({ route, setRoute }) => {

    const [showingRoute, setShowingRoute] = useState(route);

    useEffect(() => {
        const cleanRoute = route.replaceAll('%20', ' ');
        setShowingRoute(cleanRoute);
    }, [route]);

    return (
        <div className="directory-container">
            <div className="sub-directory-container">
                <Home 
                    setRoute={setRoute}
                />
                <h4 className="title">{showingRoute}</h4>
            </div>
        </div>
    );
};

export default Directory;