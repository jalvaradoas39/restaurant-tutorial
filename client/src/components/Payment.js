import React from 'react';
import ProgressBar from './ProgressBar';

const Payment = () => {
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

						<form>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='paymentMethod'
									value='paypal'
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
