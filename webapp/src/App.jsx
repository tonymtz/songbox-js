import React, { useState, useEffect } from 'react';
import Cookie from 'universal-cookie';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/app.scss';

import Sidebar from './components/Sidebar/index';
import Main from './components/Main/index';
import Favorites from './components/Favorites/index';
import Settings from './components/Settings/index';
import Help from './components/Help/index';
import NotFound from './components/Not found/index';

import auth from './auth/auth';

const App = () => {
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		const cookie = new Cookie();
		const token = cookie.get('dbx-token');

		const redirectURL = `${window.location.protocol}//${window.location.hostname}/login`;
		
		auth(token)
			.then((result) => {
				const validToken = result.data.status === 200 ? true : false;
				setIsAuth(validToken);

				if (!validToken) window.location.href  = redirectURL;
			})
			.catch(()=> {
				setIsAuth(false);
				window.location.href  = redirectURL;	
			});
	}, []);

	return (
		<>
			{
				isAuth &&
				<BrowserRouter>
					<div className="sidebar-container">
						<Sidebar />
					</div>
					<div>
						<Switch>
							<Route path="/app" component={Main} exact={true}/>
							<Route path="/favorites" component={Favorites} />
							<Route path="/settings" component={Settings}/>
							<Route path="/help" component={Help} />
							<Route component={NotFound}/>
						</Switch>
					</div>
				</BrowserRouter>
			}	
		</>
	);
};

export default App;
