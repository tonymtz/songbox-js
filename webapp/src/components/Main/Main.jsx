import React, { useEffect, useState } from 'react';
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

  const history = useHistory();

  const [triggerUpdate, setTriggerUpdate] = useState();

  useEffect(() => {
    const changeRouteState = (newRoute) => dispatch(changeRoute(newRoute));

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`content-container ${darkThemeActive ? 'dark-theme-background dark-theme-color' : ''}`}>
      <h1 id="your-personal-library" className="title">Your personal library</h1>
      <Breadcrumb
        setTriggerUpdate={setTriggerUpdate}
      />

      <Files
        key={route}
        triggerUpdate={triggerUpdate}
        setTriggerUpdate={setTriggerUpdate}
      />
    </div>
  );
};

export default Main;
