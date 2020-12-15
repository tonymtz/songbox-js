import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';

import BreadcrumbContainer from './Breadcrumb.container';

import './style/breadcrumb.scss';

const Directory = () => {
  const { path } = useParams();

  const [showingRoute, setShowingRoute] = useState([]);
  const [clickableFolders, setClickableFolders] = useState([]);

  useEffect(() => {
    const myRoute = path || '';
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
  }, [path]);

  return ( 
    <BreadcrumbContainer 
      clickableFolders={clickableFolders}
      showingRoute={showingRoute}
    />
  );
};

Directory.defaultProps = {
  setTriggerUpdate: undefined,
};

Directory.propTypes = {
  setTriggerUpdate: propTypes.func,
};

export default Directory;
