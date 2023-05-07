import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
	SHOW_ERROR_MESSAGE,
	SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import {
	CREATE_PRODUCT,
	GET_PRODUCTS,
	GET_PRODUCT,
	DELETE_PRODUCT,
} from '../constants/productConstants';

export const createProduct = formData => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.post(
			`${process.env.REACT_APP_SERVER_URL}/api/product`,
			formData
		);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_SUCCESS_MESSAGE,
			payload: response.data.successMessage,
		});
		dispatch({
			type: CREATE_PRODUCT,
			payload: response.data.product,
		});
	} catch (err) {
		console.log('createProduct api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const getProducts = () => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get(
			`${process.env.REACT_APP_SERVER_URL}/api/product`
		);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_PRODUCTS,
			payload: response.data.products,
		});
	} catch (err) {
		console.log('getProducts api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const getProductsByCount = () => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get(
			`${process.env.REACT_APP_SERVER_URL}/api/product/count`
		);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_PRODUCTS,
			payload: response.data.products,
		});
	} catch (err) {
		console.log('getProducts api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const getProduct = productId => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get(
			`${process.env.REACT_APP_SERVER_URL}/api/product/${productId}`
		);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_PRODUCT,
			payload: response.data,
		});
	} catch (err) {
		console.log('getProducts api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const deleteProduct = productId => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.delete(
			`${process.env.REACT_APP_SERVER_URL}/api/product/${productId}`
		);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: DELETE_PRODUCT,
			payload: response.data,
		});
	} catch (err) {
		console.log('deleteProduct api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};
