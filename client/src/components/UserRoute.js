import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth';

const UserRoute = () => {
	return isAuthenticated() && isAuthenticated().role === 0 ? (
		<Outlet />
	) : (
		<Navigate to='/signin' />
	);
};

export default UserRoute;
