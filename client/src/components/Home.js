import React, { useEffect } from 'react';
import { showLoading } from '../helpers/loading';
import Card from './Card';
import { getNewArrivals } from '../redux/actions/filterActions';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNewArrivals());
	}, [dispatch]);

	const { newArrivals } = useSelector(state => state.filters);
	const { loading } = useSelector(state => state.loading);

	return (
		<section className='home-page'>
			<div className='banner-image'></div>
			{loading ? (
				<div className='text-center'>{showLoading()}</div>
			) : (
				<>
					<div className='container'>
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
					</div>
				</>
			)}
		</section>
	);
};

export default Home;
