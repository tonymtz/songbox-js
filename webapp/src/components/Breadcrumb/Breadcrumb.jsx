import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { changeRoute } from '../../redux/actions';

import Home from '../Home';

import './style/breadcrumb.scss';

const Directory = () => {
    const route = useSelector((state) => state.route); 
    const dispatch = useDispatch();
    const changeRouteState = (newRoute) => dispatch(changeRoute(newRoute));

    const history = useHistory();

    const [showingRoute, setShowingRoute] = useState(route);

    history.listen(({ pathname }) => {
        let finalRoute = pathname;

        if (finalRoute.startsWith('/app')) finalRoute = finalRoute.replace('/app', '');
        if (finalRoute === "") finalRoute = "/";

        changeRouteState(finalRoute);
    }, []);

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