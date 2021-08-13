import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import { SHOW_ERROR_MESSAGE } from '../constants/messageConstants';
import { GET_NEW_ARRIVALS } from '../constants/filterConstants';

export const getNewArrivals =
	(sortBy = 'desc', limit = 3) =>
	async dispatch => {
		try {
			dispatch({ type: START_LOADING });
			const response = await axios(
				`/api/filter?sortBy=${sortBy}&limit=${limit}`
			);
			dispatch({ type: STOP_LOADING });
			dispatch({
				type: GET_NEW_ARRIVALS,
				payload: response.data.newArrivals,
			});
		} catch (err) {
			dispatch({ type: STOP_LOADING });
			dispatch({
				type: SHOW_ERROR_MESSAGE,
				payload: err.response.data.errorMessage,
			});
		}
	};
