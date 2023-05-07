import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ADD_TO_CART } from '../redux/constants/cartConstants';
import { deleteFromCart } from '../redux/actions/cartActions';
import { isAuthenticated } from '../helpers/auth';

const Cart = ({ history }) => {
	let navigate = useNavigate();
	const { cart } = useSelector(state => state.cart);

	const dispatch = useDispatch();

	const handleGoBackBtn = () => {
		navigate(-1);
	};

	const handleQtyChange = (e, product) => {
		const cart = localStorage.getItem('cart')
			? JSON.parse(localStorage.getItem('cart'))
			: [];

		cart.forEach(cartItem => {
			if (cartItem._id === product._id) {
				cartItem.count = e.target.value;
			}
		});

		localStorage.setItem('cart', JSON.stringify(cart));

		dispatch({
			type: ADD_TO_CART,
			payload: cart,
		});
	};

	const handleCheckout = evt => {
		if (isAuthenticated()) {
			navigate('/shipping');
		} else {
			navigate('/signin?redirect=shipping');
		}
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
										<tr key={product._id}>
											<th scope='row'>
												{' '}
												<img
													style={{
														maxWidth: '110px',
													}}
													className='img-fluid w-100 img-thumbnail'
													src={`${process.env.REACT_APP_SERVER_URL}/uploads/${product.fileName}`}
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
											<td>
												<input
													type='number'
													min='1'
													max={product.productQty}
													value={product.count}
													onChange={e =>
														handleQtyChange(
															e,
															product
														)
													}
												/>
											</td>
											<td>
												{' '}
												<button
													type='button'
													className='btn btn-danger btn-sm'
													onClick={() =>
														dispatch(
															deleteFromCart(
																product
															)
														)
													}
												>
													<i className='far fa-trash-alt pr-1'></i>
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className='col-md-4 border-left pl-4'>
							<h2>Cart Summary</h2>
							<p className='font-weight-light text-muted border-bottom'>
								{cart.length === 1
									? '(1) Item'
									: `(${cart.length}) Items`}
							</p>
							<p className='font-weight-bold'>
								Total: $
								{cart
									.reduce(
										(currentSum, currentCartItem) =>
											currentSum +
											currentCartItem.count *
												currentCartItem.productPrice,
										0
									)
									.toFixed(2)}
							</p>
							<button
								className='btn btn-dark btn-large btn-block mb-5 py-2'
								onClick={handleCheckout}
							>
								Proceed to Checkout
							</button>
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default Cart;
