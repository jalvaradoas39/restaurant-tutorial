import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import Card from './Card';

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	const { products } = useSelector(state => state.products);

	return (
		<section className='shop-page m-4'>
			<div className='jumbotron'>
				<h1 className='display-4'>Shop</h1>
			</div>
			<div className='row'>
				<div className='col-md-3 border-right'>Filters go here</div>
				<div className='col-md-9'>
					<div className='row'>
						{products.map(p => (
							<Card key={p._id} product={p} homePage={true} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Shop;
