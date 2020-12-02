import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Home from '../Home';

import './style/breadcrumb.scss';

const Directory = () => {
    const route = useSelector((state) => state.route); 
    const [showingRoute, setShowingRoute] = useState([]);

    const [clickableFolders, setClickableFolders] = useState([]);

    useEffect(() => {
        const myRoute = route;
        const cleanRoute = myRoute.replaceAll('%20', ' ');

        const splitBreadCrumb = cleanRoute.split('/');
        const cleanRoutes = splitBreadCrumb.filter((route) => route !== "");
        let finalRoutes = [];

        for (let i = 0; i < cleanRoutes.length; i++) {
            let tempRoute = "";
            for(let j = 0; j <= i; j++) {
                tempRoute = tempRoute + '/' + cleanRoutes[j];
            }

            finalRoutes.push(tempRoute + '/');
        }

        setClickableFolders(finalRoutes);
        setShowingRoute(cleanRoutes);
    }, [route]);



    return (
        <div className="directory-container">
            <div className="sub-directory-container">
                <Home />
                <h4 className="title">
                    {
                        clickableFolders.length >= 1 ? 
                            clickableFolders.map((route, index) => (
                                <Link className="route-breadcrumb" key={route} to={'/app' + route}>
                                    {'/' + showingRoute[index]}
                                </Link>
                            ))
                            : (
                                '/'
                            )
                    }
                </h4>
            </div>
        </div>
    );
};

export default Directory;