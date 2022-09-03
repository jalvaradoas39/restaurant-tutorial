import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import usaStates from '../data/usaStates';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../redux/actions/orderActions';

const Shipping = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { shippingAddress } = useSelector(state => state.order);

	const [address, setAddress] = useState('');
	const [address2, setAddress2] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zip, setZip] = useState('');

	useEffect(() => {
		shippingAddress.address
			? setAddress(shippingAddress.address)
			: setAddress('');
		shippingAddress.address2
			? setAddress2(shippingAddress.address2)
			: setAddress2('');
		shippingAddress.city ? setCity(shippingAddress.city) : setCity('');
		shippingAddress.state ? setState(shippingAddress.state) : setState('');
		shippingAddress.zip ? setZip(shippingAddress.zip) : setZip('');
	}, [shippingAddress]);

	const handleSubmit = evt => {
		evt.preventDefault();

		const shippingData = {
			address,
			address2,
			city,
			state,
			zip,
		};

		dispatch(saveShippingAddress(shippingData));
		navigate('/payment');
	};

	return (
		<section className='m-4'>
			<div className='jumbotron p-1'>
				<h5>
					<ProgressBar step1 />
				</h5>
			</div>

			<div className='container border py-4'>
				<div className='row justify-content-center'>
					<div className='col-md-8'>
						<h6 className='font-weight-bold mb-4'>
							Shipping Details
						</h6>

						<form onSubmit={handleSubmit}>
							<div className='form-group'>
								<label htmlFor='inputAddress'>Address</label>
								<input
									type='text'
									className='form-control'
									value={address}
									onChange={evt =>
										setAddress(evt.target.value)
									}
								/>
							</div>

							<div className='form-group'>
								<label htmlFor='inputAddress2'>Address 2</label>
								<input
									type='text'
									className='form-control'
									placeholder='Apartment number, suite, unit, etc'
									value={address2}
									onChange={evt =>
										setAddress2(evt.target.value)
									}
								/>
							</div>

							<div className='form-row'>
								<div className='form-group col-md-6'>
									<label htmlFor='inputCity'>City</label>
									<input
										type='text'
										className='form-control'
										value={city}
										onChange={evt =>
											setCity(evt.target.value)
										}
									/>
								</div>
								<div className='form-group col-md-4'>
									<label htmlFor='inputState'>State</label>
									<select
										className='form-control'
										value={state}
										onChange={evt =>
											setState(evt.target.value)
										}
									>
										<option>Choose...</option>
										{usaStates.map(s => (
											<option
												key={s.abbreviation}
												value={s.abbreviation}
											>
												{s.name}
											</option>
										))}
									</select>
								</div>
								<div className='form-group col-md-2'>
									<label htmlFor='inputZip'>Zip</label>
									<input
										type='text'
										className='form-control'
										value={zip}
										onChange={evt =>
											setZip(evt.target.value)
										}
									/>
								</div>
							</div>

							<button type='submit' className='btn btn-primary'>
								Continue
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Shipping;
