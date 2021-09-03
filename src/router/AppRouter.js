import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';

import { Navbar } from '../components/Navbar';
import { Home } from '../pages/Home';
import { Employees } from '../pages/Employees';
import { Services } from '../pages/Services';
import { Deal } from '../pages/Deal';
import { Newsletter } from '../pages/Newsletter';

export const AppRouter = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home}></Route>
				<Route exact path='/ofertas' component={Deal}></Route>
				<Route exact path='/empleados' component={Employees}></Route>
				<Route exact path='/servicios' component={Services}></Route>
				<Route exact path='/newsletter' component={Newsletter}></Route>

				<Redirect to='/' />
			</Switch>
		</Router>
	);
};
