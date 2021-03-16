import React, { useState, useEffect } from 'react';
import { dispatch, useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';

const AdminEditProduct = ({ match }) => {
	/****************************
	 * PARAMS
	 ***************************/
	const productId = match.params.productId;

	/****************************
	 * REDUX GLOBAL STATE PROPERTIES
	 ***************************/
	const dispatch = useDispatch();
	const { product } = useSelector(state => state.products);

	/****************************
	 * COMPONENT STATE PROPERTIES
	 ***************************/
	const [productImage, setProductImage] = useState(null);
	const [productName, setProductName] = useState('');
	const [productDesc, setProductDesc] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [productCategory, setProductCategory] = useState('');
	const [productQty, setProductQty] = useState('');

	/****************************
	 * LIFECYCLE METHODS
	 ***************************/
	useEffect(() => {
		if (!product) {
			dispatch(getProduct(productId));
		} else {
			setProductImage(product.fileName);
			setProductName(product.productName);
			setProductDesc(product.productDesc);
			setProductPrice(product.productPrice);
			setProductCategory(product.productCategory);
			setProductQty(product.productQty);
		}
	}, [dispatch, productId, product]);

	/****************************
	 * RENDERER
	 ***************************/
	return <div>{productName}</div>;
};

export default AdminEditProduct;
