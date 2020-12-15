import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BreadcrumbContainer from '../Breadcrumb';
import FilesContainer from '../Files';
import RefreshButtonContainer from '../RefreshButton';

import './style/style.scss';

const Main = () => {
  const { path } = useParams();
  const darkThemeActive = useSelector((state) => state.player.darkTheme);

  return (
    <div className={`content-container ${darkThemeActive ? 'dark-theme-background dark-theme-color' : ''}`}>
      <h1 id="your-personal-library" className="title">Your personal library</h1>
      <div className="breadcrumb-and-refresh-background">
        <div className="breadcrumb-and-refresh-container">
          <BreadcrumbContainer />
          <RefreshButtonContainer />
        </div>
      </div>
      <FilesContainer path={path || ''} />
    </div>
  );
};

export default Main;
