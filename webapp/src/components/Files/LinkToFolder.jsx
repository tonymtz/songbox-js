import React from 'react';

import './style/files.scss';
import folderIcon from './icons/folder.svg';

const LinkToFolder = ({ fileName, route, setRoute }) => {

    const changeRoute = () => {
        const path = `${route}${fileName}/`;
        setRoute(path);
    };

    return(
        <div onClick={changeRoute} className="file-container">
            <img
                className="icon" 
                src={folderIcon} 
                alt={'folder-icon'} 
            />
            <p className="file-name">{'Unnamed file' && fileName}</p>
        </div>
    );
};

export default LinkToFolder;