import React from 'react';

import folderIcon from './icons/folder.svg';
import playCircleIcon from './icons/play-circle.svg';
import heartIcon from './icons/heart.svg';

import './style/files.scss';

const File = ({ file, route, setRoute, setSongsInQueue }) => {

	const changeRoute = () => {
		if (file['.tag'] === 'folder') {
			const path = `${route}${file.name}/`;
			setRoute(path);
		}
	};

	return (
		<div
			onClick={
				file['.tag'] === 'folder' ? changeRoute : setSongsInQueue
			}

			className="file-container"
		>
			<img
				className="icon" 
				src={file['.tag'] === 'folder' ? folderIcon : playCircleIcon} 
				alt={file['.tag'] === 'folder' ? 'folder-icon' : 'play-cicle'} 
			/>
			<p className="file-name">{file.name ? file.name : 'Unnamed file'}</p>
			{
				file['.tag'] === 'file' &&
				<img
					className="heart-icon"
					src={heartIcon}
					alt="heart-icon"
				/>
			}
		</div>
	);
};

export default File;