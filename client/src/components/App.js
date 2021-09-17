import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import Signup from './Signup';
import Signin from './Signin';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import AdminEditProduct from './AdminEditProduct';
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
					<Route exact path='/shop' component={Shop} />
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
					<AdminRoute
						exact
						path='/admin/edit/product/:productId'
						component={AdminEditProduct}
					/>
					<Route component={NotFound} />
				</Switch>
			</main>
		</BrowserRouter>
	);
};

export default App;
