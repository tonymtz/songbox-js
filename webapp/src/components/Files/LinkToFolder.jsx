import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import folderIcon from './icons/folder.svg';

const LinkToFolder = ({ fileName, route }) => {
  const path = `${route}${fileName}/`;
  const darkThemeActive = useSelector((state) => state.player.darkTheme);

  return (
    <Link to={`/app${path}`}>
      <div className="file-container">
        <img
          className="icon"
          src={folderIcon}
          alt="folder-icon"
        />
        <div className="file-name-container folder">
          <p className={`file-name ${darkThemeActive ? 'dark-theme-color' : ''}`}>{'Unnamed file' && fileName}</p>
        </div>
      </div>
    </Link>
  );
};

LinkToFolder.propTypes = {
  fileName: propTypes.string,
  route: propTypes.string,
};

LinkToFolder.defaultProps = {
  fileName: '',
  route: '',
};

export default LinkToFolder;
