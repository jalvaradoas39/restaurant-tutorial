import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Shipping from './Shipping';
import Product from './Product';
import Signup from './Signup';
import Signin from './Signin';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import AdminEditProduct from './AdminEditProduct';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import NotFound from './NotFound';
// import { isAuthenticated } from '../helpers/auth';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/shop' element={<Shop />} />
					<Route exact path='/cart' element={<Cart />} />
					<Route
						exact
						path='/product/:productId'
						element={<Product />}
					/>
					<Route exact path='/shipping' element={<Shipping />} />
					<Route exact path='/signup' element={<Signup />} />
					<Route exact path='/signin' element={<Signin />} />

					<Route element={<UserRoute />}>
						<Route
							exact
							path='/user/dashboard'
							element={<UserDashboard />}
						/>
					</Route>

					<Route element={<AdminRoute />}>
						<Route
							exact
							path='/admin/dashboard'
							element={<AdminDashboard />}
						/>
						<Route
							exact
							path='/admin/edit/product/:productId'
							element={<AdminEditProduct />}
						/>
					</Route>

					<Route element={<NotFound />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;
