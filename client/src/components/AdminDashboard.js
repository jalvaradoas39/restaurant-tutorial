import React, { useEffect } from 'react';
// components
import AdminHeader from './AdminHeader';
import AdminActionBtns from './AdminActionBtns';
import AdminCategoryModal from './AdminCategoryModal';
import AdminProductModal from './AdminProductModal';
import AdminBody from './AdminBody';
// redux
import { useDispatch } from 'react-redux';
import { getCategories } from '../redux/actions/categoryActions';
import { getProducts } from '../redux/actions/productActions';

const AdminDashboard = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<section>
			<AdminHeader />
			<AdminActionBtns />
			<AdminCategoryModal />
			<AdminProductModal />
			<AdminBody />
		</section>
	);
};

export default AdminDashboard;
