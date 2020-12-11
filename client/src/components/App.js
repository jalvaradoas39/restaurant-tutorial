import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import NotFound from './NotFound';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/signup' component={Signup} />
					<Route exact path='/signin' component={Signin} />
					<UserRoute
						exact
						path='/user/dashboard'
						component={UserDashboard}
					/>
					<AdminRoute
						exact
						path='/admin/dashboard'
						component={AdminDashboard}
					/>
					<Route component={NotFound} />
				</Switch>
			</main>
		</BrowserRouter>
	);
};

export default App;
