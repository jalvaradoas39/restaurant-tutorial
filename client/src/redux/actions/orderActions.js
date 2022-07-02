import { SAVE_SHIPPING_ADDRESS } from '../constants/orderConstants';

export const saveShippingAddress = data => async dispatch => {
	dispatch({
		type: SAVE_SHIPPING_ADDRESS,
		payload: data,
	});

	localStorage.setItem('shippingAddress', JSON.stringify(data));
};
