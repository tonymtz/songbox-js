import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Main from './components/Main'
import NotFound from './components/NotFound'

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
