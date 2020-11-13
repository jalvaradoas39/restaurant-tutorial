import React, { Fragment, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { createCategory } from '../api/category';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';

const AdminCategoryModal = () => {
	/****************************
	 * COMPONENT STATE PROPERTIES
	 ***************************/
	const [category, setCategory] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');
	const [loading, setLoading] = useState(false);

	/****************************
	 * EVENT HANDLERS
	 ***************************/
	const handleMessages = evt => {
		setErrorMsg('');
		setSuccessMsg('');
	};

	const handleCategoryChange = evt => {
		setErrorMsg('');
		setSuccessMsg('');
		setCategory(evt.target.value);
	};

	const handleCategorySubmit = evt => {
		evt.preventDefault();

		if (isEmpty(category)) {
			setErrorMsg('Please enter a category');
		} else {
			const data = { category };

			setLoading(true);
			createCategory(data)
				.then(response => {
					setLoading(false);
					setSuccessMsg(response.data.successMessage);
					setCategory('');
				})
				.catch(err => {
					setLoading(false);
					setErrorMsg(err.response.data.errorMessage);
				});
		}
	};

	/****************************
	 * RENDERER
	 ***************************/
	return (
		<div id='addCategoryModal' className='modal' onClick={handleMessages}>
			<div className='modal-dialog modal-dialog-centered modal-lg'>
				<div className='modal-content'>
					<form onSubmit={handleCategorySubmit}>
						<div className='modal-header bg-info text-white'>
							<h5 className='modal-title'>Add Category</h5>
							<button className='close' data-dismiss='modal'>
								<span>
									<i className='fas fa-times'></i>
								</span>
							</button>
						</div>
						<div className='modal-body my-2'>
							{errorMsg && showErrorMsg(errorMsg)}
							{successMsg && showSuccessMsg(successMsg)}

							{loading ? (
								<div className='text-center'>
									{showLoading()}
								</div>
							) : (
								<Fragment>
									<label className='text-secondary'>
										Category
									</label>
									<input
										type='text'
										className='form-control'
										name='category'
										value={category}
										onChange={handleCategoryChange}
									/>
								</Fragment>
							)}
						</div>
						<div className='modal-footer'>
							<button
								className='btn btn-secondary'
								data-dismiss='modal'
							>
								Close
							</button>
							<button type='submit' className='btn btn-info'>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminCategoryModal;
