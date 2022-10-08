import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../redux/actions/orderActions';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const { paymentMethod } = useSelector(state => state.order);
	const [paymentType, setPaymentType] = useState('stripe');

	useEffect(() => {
		if (paymentMethod) {
			setPaymentType(paymentMethod);
		}
	}, [setPaymentType]);

	const handleChange = e => {
		setPaymentType(e.target.value);
		dispatch(savePaymentMethod(e.target.value));
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(savePaymentMethod(paymentType));

		navigate('/placeorder');
	};

	return (
		<section className='m-4'>
			<div className='jumbotron p-1'>
				<h5>
					<ProgressBar step1 step2 />
				</h5>
			</div>

			<div className='container border border py-4'>
				<div className='row justify-content-center'>
					<div className='col-md-8'>
						<h6 className='font-weight-bold mb-4'>Payment</h6>

						<form onSubmit={handleSubmit}>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='paymentMethod'
									value='paypal'
									onChange={handleChange}
									checked={paymentType === 'paypal'}
								/>
								<label className='form-check-label'>
									Paypal
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='paymentMethod'
									value='stripe'
									onChange={handleChange}
									checked={paymentType === 'stripe'}
								/>
								<label className='form-check-label'>
									Stripe
								</label>
							</div>
							<button className='btn btn-primary mt-3'>
								Continue
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Payment;
