import React from 'react';

import Home from '../Home/index';

import './style/directory.css';

const Directory = ({ route, setRoute }) => {
	return (
		<div className="directory-container">
			<Home 
				setRoute={setRoute}
			/>
			<h4 className="title">{route}</h4>
		</div>
	);
};

export default Directory;