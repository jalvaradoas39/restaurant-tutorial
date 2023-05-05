import React, { useEffect, useState } from 'react';
import { showLoading } from '../helpers/loading';
import Card from './Card';
import { getNewArrivals } from '../redux/actions/filterActions';
import { getProductsByCount } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { clearCart } from '../redux/actions/cartActions';
import { clearOrder } from '../redux/actions/orderActions';
import { clearCartLocalStorage } from '../helpers/localStorage';

const Home = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		if (
			location.state &&
			location.state.result.paymentIntent.status === 'succeeded'
		) {
			dispatch(clearCart());
			dispatch(clearOrder());
			clearCartLocalStorage(() => {
				setSuccessMsg('Your payment was successful!');
				setTimeout(() => {
					setSuccessMsg('');
				}, 5000);
			});
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		dispatch(getNewArrivals());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getProductsByCount());
	}, [dispatch]);

	const [successMsg, setSuccessMsg] = useState('');
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
						{location.state &&
							location.state.result.paymentIntent.status ===
								'succeeded' &&
							successMsg && (
								<div
									className='alert alert-success text-center'
									role='alert'
								>
									{successMsg}
								</div>
							)}
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
