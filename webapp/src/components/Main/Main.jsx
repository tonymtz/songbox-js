import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Directory from '../Directory/index';
import Files from '../Files/index';

const Main = () => {
	const [route, setRoute] = useState('/');
	const [isAuth, setIsAuth] = useState(true);

	return (
		<div className="App">

			<div>
				<h1 className="title">Your personal library</h1>
				<Directory
					route={route}
					setRoute={setRoute}
				/>
				<Files
					setIsAuth={setIsAuth}
					route={route}
					setRoute={setRoute}
				/>
			</div>
			{ !isAuth && <Redirect to="/login" />}
		</div>
	);
};

export default Main;