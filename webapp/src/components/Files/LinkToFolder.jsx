import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import folderIcon from './icons/folder.svg';

const LinkToFolder = ({ folder }) => {
  const darkThemeActive = useSelector((state) => state.player.darkTheme);

  return (
    <Link to={`/app${folder.get('path_lower')}`}>
      <div className="file-container">
        <img
          className="icon"
          src={folderIcon}
          alt="folder-icon"
        />
        <div className="file-name-container folder">
          <p className={`file-name ${darkThemeActive ? 'dark-theme-color' : ''}`}>{'Unnamed file' && folder.get('name')}</p>
        </div>
      </div>
    </Link>
  );
};

LinkToFolder.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  folder: propTypes.object.isRequired,
};

export default LinkToFolder;
