import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';

import Main from './components/Main/index';
import NotFound from './components/Not found/index';

const App = () => {
  	return (
    	<BrowserRouter>
			<div>
				<Switch>
					<Route path="/app" component={Main} exact={true}/>
					<Route component={NotFound}/>
				</Switch>
			</div>
		</BrowserRouter>
  	);
}

export default App;
