import React, { useState, useEffect } from 'react';
import Cookie from 'universal-cookie';

import File from './File';

import getFiles from './tools/files';

const Files = ({ route, setRoute, setSongs }) => {
	const [files, setFiles] = useState([]);

	const filterSongs = (files) => {
		if (files.length <= 0) return files;
		
		const songs = files.filter((file) => file['.tag'] === 'file');
		return songs;
	};

	useEffect(() => {
		const cookie = new Cookie();
		const token = cookie.get('dbx-token');

		getFiles(token, route)
			.then((result) => {
				setFiles(result.data);
			})
			.catch(() => {
				setFiles([]);
			});
	}, [route]);

	const setSongsInQueue = () => {
		const songs = filterSongs(files);
		setSongs(songs);	
	};

	return (
		<div>
			{
				files.map((file) => {
					return (
						<File
							key={file.id}
							file={file}
							route={route}
							setRoute={setRoute}
							setSongsInQueue={setSongsInQueue}
						/>
					);
				})
			}
		</div>
	);
};

export default Files;