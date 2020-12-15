import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from '../Home';

const BreadcrumbContainer = ({ clickableFolders, showingRoute }) => {
  const darkThemeActive = useSelector((state) => state.player.darkTheme);

  return (
    <div className="directory-container">
      <div className="sub-directory-container">
        <Home />
        <div className={`route-refresh-container ${darkThemeActive ? 'dark-theme-background' : ''}`}>
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
    </div>
  );
};

export default BreadcrumbContainer;