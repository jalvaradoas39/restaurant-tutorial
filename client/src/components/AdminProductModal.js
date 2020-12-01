import React, { Fragment, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../redux/actions/messageActions';
import { createProduct } from '../redux/actions/productActions';

const AdminProductModal = () => {
	/****************************
	 * REDUX GLOBAL STATE PROPERTIES
	 ***************************/
	const { loading } = useSelector(state => state.loading);
	const { successMsg, errorMsg } = useSelector(state => state.messages);
	const { categories } = useSelector(state => state.categories);

	const dispatch = useDispatch();
	/****************************
	 * COMPONENT STATE PROPERTIES
	 ***************************/
	const [clientSideError, setClientSideError] = useState('');
	const [productData, setProductData] = useState({
		productImage: null,
		productName: '',
		productDesc: '',
		productPrice: '',
		productCategory: '',
		productQty: '',
	});

	const {
		productImage,
		productName,
		productDesc,
		productPrice,
		productCategory,
		productQty,
	} = productData;

	/****************************
	 * EVENT HANDLERS
	 ***************************/
	const handleMessages = evt => {
		dispatch(clearMessages());
		setClientSideError('');
	};

	const handleProductChange = evt => {
		setProductData({
			...productData,
			[evt.target.name]: evt.target.value,
		});
	};

	const handleProductImage = evt => {
		console.log(evt.target.files[0]);
		setProductData({
			...productData,
			[evt.target.name]: evt.target.files[0],
		});
	};

	const handleProductSubmit = evt => {
		evt.preventDefault();

		if (productImage === null) {
			setClientSideError('Please select an image');
		} else if (
			isEmpty(productName) ||
			isEmpty(productDesc) ||
			isEmpty(productPrice)
		) {
			setClientSideError('Please enter all fields');
		} else if (isEmpty(productCategory)) {
			setClientSideError('Please select a category');
		} else if (isEmpty(productQty)) {
			setClientSideError('Please select a quantity');
		} else {
			let formData = new FormData();

			formData.append('productImage', productImage);
			formData.append('productName', productName);
			formData.append('productDesc', productDesc);
			formData.append('productPrice', productPrice);
			formData.append('productCategory', productCategory);
			formData.append('productQty', productQty);

			dispatch(createProduct(formData));
			setProductData({
				productImage: null,
				productName: '',
				productDesc: '',
				productPrice: '',
				productCategory: '',
				productQty: '',
			});
		}
	};

	/****************************
	 * RENDERER
	 ***************************/
	return (
		<div id='addFoodModal' className='modal' onClick={handleMessages}>
			<div className='modal-dialog modal-dialog-centered modal-lg'>
				<div className='modal-content'>
					<form onSubmit={handleProductSubmit}>
						<div className='modal-header bg-warning text-white'>
							<h5 className='modal-title'>Add Food</h5>
							<button className='close' data-dismiss='modal'>
								<span>
									<i className='fas fa-times'></i>
								</span>
							</button>
						</div>
						<div className='modal-body my-2'>
							{clientSideError && showErrorMsg(clientSideError)}
							{errorMsg && showErrorMsg(errorMsg)}
							{successMsg && showSuccessMsg(successMsg)}

							{loading ? (
								<div className='text-center'>
									{showLoading()}
								</div>
							) : (
								<Fragment>
									<div className='custom-file mb-2'>
										<input
											type='file'
											className='custom-file-input'
											name='productImage'
											onChange={handleProductImage}
										/>
										<label className='custom-file-label'>
											Choose File
										</label>
									</div>

									<div className='form-group'>
										<label className='text-secondary'>
											Name
										</label>
										<input
											type='text'
											className='form-control'
											name='productName'
											value={productName}
											onChange={handleProductChange}
										/>
									</div>

									<div className='form-group'>
										<label className='text-secondary'>
											Description
										</label>
										<textarea
											className='form-control'
											rows='3'
											name='productDesc'
											value={productDesc}
											onChange={handleProductChange}
										></textarea>
									</div>

									<div className='form-group'>
										<label className='text-secondary'>
											Price
										</label>
										<input
											type='text'
											className='form-control'
											name='productPrice'
											value={productPrice}
											onChange={handleProductChange}
										/>
									</div>

									<div className='form-row'>
										<div className='form-group col-md-6'>
											<label className='text-secondary'>
												Category
											</label>
											<select
												className='custom-select mr-sm-2'
												name='productCategory'
												onChange={handleProductChange}
											>
												<option value=''>
													Choose one...
												</option>
												{categories &&
													categories.map(c => (
														<option
															key={c._id}
															value={c._id}
														>
															{c.category}
														</option>
													))}
											</select>
										</div>

										<div className='form-group col-md-6'>
											<label className='text-secondary'>
												Quantity
											</label>
											<input
												type='number'
												className='form-control'
												min='0'
												max='1000'
												name='productQty'
												value={productQty}
												onChange={handleProductChange}
											/>
										</div>
									</div>
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
							<button
								type='submit'
								className='btn btn-warning text-white'
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminProductModal;
