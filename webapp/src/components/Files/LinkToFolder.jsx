import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeRoute } from '../../redux/actions';

import folderIcon from './icons/folder.svg';

const LinkToFolder = ({ fileName, route }) => {

    const dispatch = useDispatch();

    const path = `${route}${fileName}/`;
    const changeFolder = () => dispatch(changeRoute(path));

    const darkThemeActive = useSelector((state) => state.player.darkTheme);

    return(
        <Link to={'/app' + path}>
            <div onClick={changeFolder} className="file-container">
                <img
                    className="icon" 
                    src={folderIcon} 
                    alt={'folder-icon'} 
                />
                <div className="file-name-container">
                    <p className={`file-name ${darkThemeActive ? 'dark-theme-color' : '' }`}>{'Unnamed file' && fileName}</p>
                </div>
            </div>
        </Link>
    );
};

export default LinkToFolder;