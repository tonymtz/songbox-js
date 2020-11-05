import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import Home from '../Home';
import './style/breadcrumb.scss';

const Directory = () => {

    const route = useSelector((state) => state.route);

    const [showingRoute, setShowingRoute] = useState(route);

    useEffect(() => {
        const cleanRoute = route.replaceAll('%20', ' ');
        setShowingRoute(cleanRoute);
    }, [route]);

    return (
        <div className="directory-container">
            <div className="sub-directory-container">
                <Home />
                <h4 className="title">{showingRoute}</h4>
            </div>
        </div>
    );
};

export default Directory;