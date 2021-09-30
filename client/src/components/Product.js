import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';

const Product = ({ match, history }) => {
	const { productId } = match.params;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProduct(productId));
	}, [dispatch, productId]);

	const { product } = useSelector(state => state.products);

	const handleGoBackBtn = () => {
		history.goBack();
	};

	return (
		<section className='product-page m-4'>
			<button
				to='/shop'
				className='btn btn-light text-primary'
				onClick={handleGoBackBtn}
			>
				Go Back
			</button>
		</section>
	);
};

export default Product;
