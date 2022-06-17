import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth';

const AdminRoute = () => {
	return isAuthenticated() && isAuthenticated().role === 1 ? (
		<Outlet />
	) : (
		<Navigate to='/signin' />
	);
};

export default AdminRoute;
