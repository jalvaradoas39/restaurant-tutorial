import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import axios from 'axios';

const PlaceOrder = () => {
	const [clientSecret, setClientSecret] = useState('');

	const calculateCartTotal = () => {
		const cart = JSON.parse(localStorage.getItem('cart'));

		let cartTotal = cart.reduce((accumulator, currentValue) => {
			return accumulator + currentValue.count * currentValue.productPrice;
		}, 0);

		cartTotal = cartTotal.toFixed(2) * 100;

		return cartTotal;
	};

	const getPaymentIntent = async () => {
		const cartTotal = calculateCartTotal();

		const response = await axios.post('/api/payment/payment-intent', {
			total: cartTotal,
		});

		setClientSecret(response.data.clientSecret);
	};

	useEffect(() => {
		getPaymentIntent();
		// eslint-disable-next-line
	}, []);

	return (
		<section className='m-4'>
			<div className='jumbotron p-1'>
				<h5>
					<ProgressBar step1 step2 />
				</h5>
				{JSON.stringify(clientSecret)}
			</div>

			<div className='container border border py-4'>
				<div className='row justify-content-center'>
					<div className='col-md-8'>
						<h6 className='font-weight-bold mb-4'>Place Order</h6>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PlaceOrder;
