import React from 'react';
// redux
import { useSelector } from 'react-redux';

const AdminBody = () => {
	const { products } = useSelector(state => state.products);

	return (
		<div className='container'>
			<div className='row'>
				<div className='card-deck'>
					{products.map(product => (
						<div className='card'>{product.productName}</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AdminBody;
