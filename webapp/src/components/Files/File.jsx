import React from 'react';
import axios from 'axios';
import Cookie from 'universal-cookie';

import folderIcon from './icons/folder.svg';
import playCircleIcon from './icons/play-circle.svg';
import heartIcon from './icons/heart.svg';

import './style/files.scss';

const File = ({ file, route, setRoute }) => {

	const changeRoute = () => {
		if (file['.tag'] === 'folder') {
			const path = `${route}${file.name}/`;
			setRoute(path);
		}
	};

	const getLink = async () => {
		const cookie = new Cookie();
		const token = cookie.get('dbx-token');

		try {
			const url = `${window.location.protocol}//${window.location.hostname}/api/file${route}${file.name}`;
			const resposne = await axios.get(url, {
				headers: {
					'Content-Type': 'application/json',
					'dbx-token': `${token}`
				}
			});

			console.log(resposne.data.result.preview_url);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			onClick={
				file['.tag'] === 'folder' ? changeRoute : getLink
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