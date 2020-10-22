import React, { useState } from 'react';

import Directory from '../Directory/index';
import Files from '../Files/index';
import AudioPlayer from '../Audio Player/index';

import './style/style.scss';

const Main = () => {
	const [route, setRoute] = useState('/');
	const [songs, setSongs] = useState([]);

	return (
		<div className="App">
			<div className="content-container">
				<h1 className="title">Your personal library</h1>
				<Directory
					route={route}
					setRoute={setRoute}
				/>
				<Files
					route={route}
					setRoute={setRoute}
					setSongs={setSongs}
				/>
				<AudioPlayer
					songs={songs}
				/> 
			</div>
		</div>
	);
};

export default Main;