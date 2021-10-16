import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = ({ history }) => {
	const { cart } = useSelector(state => state.cart);

	const handleGoBackBtn = () => {
		history.goBack();
	};

	return (
		<section className='cart-page m-4'>
			{cart.length <= 0 ? (
				<div className='jumbotron'>
					<h1 className='display-4'>
						Your cart is empty{' '}
						<button
							className='btn btn-light text-primary ml-4'
							onClick={handleGoBackBtn}
						>
							Go Back
						</button>
					</h1>
				</div>
			) : (
				<>
					<div className='jumbotron'>
						<h1 className='display-4'>Cart</h1>
					</div>
					<div className='row'>
						<div className='col-md-8'>
							<table className='table'>
								<thead>
									<tr>
										<th scope='col'></th>
										<th scope='col'>Product</th>
										<th scope='col'>Price</th>
										<th scope='col'>Quantity</th>
										<th scope='col'>Remove</th>
									</tr>
								</thead>
								<tbody>
									{cart.map(product => (
										<tr>
											<th scope='row'>
												{' '}
												<img
													style={{
														maxWidth: '110px',
													}}
													className='img-fluid w-100 img-thumbnail'
													src={`/uploads/${product.fileName}`}
													alt='product'
												/>
											</th>
											<td>
												{' '}
												<Link
													to={`/product/${product._id}`}
												>
													{product.productName}
												</Link>
											</td>
											<td>
												{' '}
												{product.productPrice.toLocaleString(
													'en-US',
													{
														style: 'currency',
														currency: 'USD',
													}
												)}
											</td>
											<td>{product.count}</td>
											<td>
												{' '}
												<button
													type='button'
													className='btn btn-danger btn-sm'
												>
													<i className='far fa-trash-alt pr-1'></i>
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className='col-md-4 border-left'>
							Cart summary goes here
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default Cart;
