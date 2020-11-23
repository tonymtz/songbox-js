import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeRoute } from '../../redux/actions';

import folderIcon from './icons/folder.svg';

const LinkToFolder = ({ fileName, route }) => {

    const dispatch = useDispatch();

    const path = `${route}${fileName}/`;
    const changeFolder = () => dispatch(changeRoute(path));

    return(
        <Link to={'/app' + path}>
            <div onClick={changeFolder} className="file-container">
                <img
                    className="icon" 
                    src={folderIcon} 
                    alt={'folder-icon'} 
                />
                <div className="file-name-container">
                    <p className="file-name">{'Unnamed file' && fileName}</p>
                </div>
            </div>
        </Link>
    );
};

export default LinkToFolder;