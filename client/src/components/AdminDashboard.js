import React from 'react';
// components
import AdminHeader from './AdminHeader';
import AdminActionBtns from './AdminActionBtns';
import AdminCategoryModal from './AdminCategoryModal';
import AdminProductModal from './AdminProductModal';

const AdminDashboard = () => (
	<section>
		<AdminHeader />
		<AdminActionBtns />
		<AdminCategoryModal />
		<AdminProductModal />
	</section>
);

export default AdminDashboard;
