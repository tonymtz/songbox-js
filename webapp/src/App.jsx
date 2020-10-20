import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';

import Sidebar from './components/Sidebar/index';
import Main from './components/Main/index';
import Favorites from './components/Favorites/index';
import Settings from './components/Settings/index';
import Help from './components/Help/index';
import NotFound from './components/Not found/index';

const App = () => {
	return (
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
	);
};

export default App;
