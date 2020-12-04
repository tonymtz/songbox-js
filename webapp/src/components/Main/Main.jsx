import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Breadcrumb from '../Breadcrumb';
import Files from '../Files';

import { changeRoute } from '../../redux/actions';
import getRoute from '../../route/route';

import './style/style.scss';

const Main = () => {
  const route = useSelector((state) => state.route);
  const darkThemeActive = useSelector((state) => state.player.darkTheme);
  const dispatch = useDispatch();

  const changeRouteState = (newRoute) => dispatch(changeRoute(newRoute));

  const history = useHistory();

  useEffect(() => {
    const realRoute = getRoute();
    if (realRoute !== route) {
      changeRouteState(realRoute);
    }

    history.listen(({ pathname }) => {
      let finalRoute = pathname;
      if (finalRoute.startsWith('/app')) finalRoute = finalRoute.replace('/app', '');
      if (finalRoute === '') finalRoute = '/';

      changeRouteState(finalRoute);
    }, []);
  }, []);

  return (
    <div className={`content-container ${darkThemeActive ? 'dark-theme-background dark-theme-color' : ''}`}>
      <h1 id="your-personal-library" className="title">Your personal library</h1>
      <Breadcrumb />

      <Files key={route} />
    </div>
  );
};

export default Main;
