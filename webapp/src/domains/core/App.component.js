import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  FAVORITES_PATH, FILE_PATH, HELP_PATH, HOMEPAGE_PATH, LOGOUT_PATH, SETTINGS_PATH,
} from '../../routes';

import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';
import Favorites from '../../components/Favorites';
import Settings from '../../components/Settings';
import Help from '../../components/Help';
import Logout from '../../components/Logout';
import NotFound from '../../components/NotFound';
import AudioPlayer from '../../components/AudioPlayer';

const AppComponent = () => {
  const darkThemeActive = useSelector((state) => state.player.darkTheme);

  return (
    <BrowserRouter>
      <div className={`sidebar-container ${darkThemeActive ? 'dark-soft-theme-background' : ''}`}>
        <Sidebar />
      </div>
      <div className="App">
        <Switch>
          <Route path={FAVORITES_PATH} render={() => <Favorites pageNumber={1} />} />
          <Route path={SETTINGS_PATH} render={() => <Settings pageNumber={2} />} />
          <Route path={HELP_PATH} render={() => <Help pageNumber={3} />} />
          <Route path={LOGOUT_PATH} render={() => <Logout />} />
          <Route path={HOMEPAGE_PATH} exact component={Main} />
          <Route path={FILE_PATH} exact component={Main} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <AudioPlayer />
    </BrowserRouter>
  );
};

export default AppComponent;
