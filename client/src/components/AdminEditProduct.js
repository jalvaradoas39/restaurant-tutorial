import React, { useState } from 'react';

const AdminEditProduct = ({ match }) => {
	const productId = match.params.productId;

	const [productImage, setProductImage] = useState(null);
	const [productName, setProductName] = useState('');
	const [productDesc, setProductDesc] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [productCategory, setProductCategory] = useState('');
	const [productQty, setProductQty] = useState('');

	return <div>{productId}</div>;
};

export default AdminEditProduct;
