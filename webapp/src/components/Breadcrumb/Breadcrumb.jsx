import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Home from '../Home';

import './style/breadcrumb.scss';

const Directory = () => {
  const route = useSelector((state) => state.route);
  const darkThemeActive = useSelector((state) => state.player.darkTheme);

  const [showingRoute, setShowingRoute] = useState([]);
  const [clickableFolders, setClickableFolders] = useState([]);

  useEffect(() => {
    const myRoute = route;
    const cleanRoute = myRoute.replaceAll('%20', ' ');

    const splitBreadCrumb = cleanRoute.split('/');
    const cleanRoutes = splitBreadCrumb.filter((tempRoute) => tempRoute !== '');
    const finalRoutes = [];

    for (let i = 0; i < cleanRoutes.length; i += 1) {
      let tempRoute = '';
      for (let j = 0; j <= i; j += 1) {
        tempRoute = `${tempRoute}/${cleanRoutes[j]}`;
      }

      finalRoutes.push(`${tempRoute}/`);
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
                        clickableFolders.length >= 1
                          ? clickableFolders.map((tempRoute, index) => (
                            <Link className={`${darkThemeActive ? 'dark-theme-color' : ''} route-breadcrumb`} key={tempRoute} to={`/app${tempRoute}`}>
                              {`/${showingRoute[index]}`}
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
