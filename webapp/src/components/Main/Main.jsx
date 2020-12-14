import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Breadcrumb from '../Breadcrumb';
import FilesContainer from '../Files';

import './style/style.scss';

const Main = () => {
  const { path } = useParams();
  const darkThemeActive = useSelector((state) => state.player.darkTheme);
  const [triggerUpdate, setTriggerUpdate] = useState();

  return (
    <div className={`content-container ${darkThemeActive ? 'dark-theme-background dark-theme-color' : ''}`}>
      <h1 id="your-personal-library" className="title">Your personal library</h1>
      <Breadcrumb setTriggerUpdate={setTriggerUpdate} />
      <FilesContainer path={path || ''} />
    </div>
  );
};

export default Main;
