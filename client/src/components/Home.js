import React, { useEffect } from 'react';
import { showLoading } from '../helpers/loading';
import Card from './Card';
import { getNewArrivals } from '../redux/actions/filterActions';
import { getProductsByCount } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNewArrivals());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getProductsByCount());
	}, [dispatch]);

	const { newArrivals } = useSelector(state => state.filters);
	const { products } = useSelector(state => state.products);
	const { loading } = useSelector(state => state.loading);

	return (
		<section className='home-page'>
			<div
				className='banner-image'
				style={{
					backgroundImage: `url(${
						process.env.PUBLIC_URL + '/images/banner.jpg'
					})`,
				}}
			></div>
			{loading ? (
				<div className='text-center'>{showLoading()}</div>
			) : (
				<>
					<div className='container'>
						<hr className='py-4' />
						<h3 className='py-4'>New Arrivals</h3>
						<div className='row'>
							{newArrivals &&
								newArrivals.map(newArrival => (
									<Card
										key={newArrival._id}
										product={newArrival}
										homePage={true}
									/>
								))}
						</div>

						<hr className='py-4' />
						<h3 className='py-4'>Menu</h3>
						<div className='row'>
							{products &&
								products.map(product => (
									<Card
										key={product._id}
										product={product}
										homePage={true}
									/>
								))}
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default Home;
