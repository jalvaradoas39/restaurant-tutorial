import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import { SHOW_ERROR_MESSAGE } from '../constants/messageConstants';
import { GET_NEW_ARRIVALS } from '../constants/filterConstants';
import { GET_PRODUCTS } from '../constants/productConstants';

export const getNewArrivals =
	(sortBy = 'desc', limit = 3) =>
	async dispatch => {
		try {
			dispatch({ type: START_LOADING });
			const response = await axios.get(
				`/api/filter?sortBy=${sortBy}&limit=${limit}`
			);
			dispatch({ type: STOP_LOADING });
			dispatch({
				type: GET_NEW_ARRIVALS,
				payload: response.data.newArrivals,
			});
		} catch (err) {
			console.log('getNewProducts api error: ', err);
			dispatch({ type: STOP_LOADING });
			dispatch({
				type: SHOW_ERROR_MESSAGE,
				payload: err.response.data.errorMessage,
			});
		}
	};

export const getProductsByFilter = arg => async dispatch => {
	try {
		const response = await axios.post('/api/filter/search', arg);

		dispatch({
			type: GET_PRODUCTS,
			payload: response.data.products,
		});
	} catch (err) {
		console.log('getProductsByFilter api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};
