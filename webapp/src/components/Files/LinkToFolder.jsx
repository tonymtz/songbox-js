import React from 'react';
import folderIcon from './icons/folder.svg';

import { Link } from 'react-router-dom';

const LinkToFolder = ({ fileName, route, setRoute }) => {

    const path = `${route}${fileName}/`;
    const changeRoute = () => {
        setRoute(path);
    };

    return(
        <Link to={'/app' + path}>
            <div onClick={changeRoute} className="file-container">
                <img
                    className="icon" 
                    src={folderIcon} 
                    alt={'folder-icon'} 
                />
                <p className="file-name">{'Unnamed file' && fileName}</p>
            </div>
        </Link>
    );
};

export default LinkToFolder;