import React from 'react';
import ProgressBar from './ProgressBar';

const Shipping = () => {
	return (
		<section>
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

						<form>
							<div className='form-group'>
								<label htmlFor='inputAddress'>Address</label>
								<input type='text' className='form-control' />
							</div>

							<div className='form-group'>
								<label htmlFor='inputAddress2'>Address 2</label>
								<input
									type='text'
									className='form-control'
									placeholder='Apartment number, suite, unit, etc'
								/>
							</div>

							<div className='form-row'>
								<div className='form-group col-md-6'>
									<label htmlFor='inputCity'>City</label>
									<input
										type='text'
										className='form-control'
									/>
								</div>
								<div className='form-group col-md-4'>
									<label htmlFor='inputState'>State</label>
									<select className='form-control'>
										<option>Choose...</option>
									</select>
								</div>
								<div className='form-group col-md-2'>
									<label htmlFor='inputZip'>Zip</label>
									<input
										type='text'
										className='form-control'
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
