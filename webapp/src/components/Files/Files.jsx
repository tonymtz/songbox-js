import React, { useState, useEffect } from 'react';
import Cookie from 'universal-cookie';

import File from './File';

import getFiles from './tools/files';

const Files = ({ route, setRoute }) => {
	const [files, setFiles] = useState([]);

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
						/>
					);
				})
			}
		</div>
	);
};

export default Files;