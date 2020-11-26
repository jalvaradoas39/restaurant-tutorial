import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import { SHOW_ERROR_MESSAGE } from '../constants/messageConstants';
import { GET_CATEGORIES } from '../constants/categoryConstants';
import axios from 'axios';

export const getCategories = () => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get('/api/category');
		dispatch({ type: STOP_LOADING });
		dispatch({ type: GET_CATEGORIES, payload: response.data.categories });
	} catch (err) {
		console.log('getCategories api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};
