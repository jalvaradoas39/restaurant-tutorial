import {
	SAVE_SHIPPING_ADDRESS,
	SAVE_PAYMENT_METHOD,
	CLEAR_ORDER,
} from '../constants/orderConstants';

export const saveShippingAddress = data => async dispatch => {
	dispatch({
		type: SAVE_SHIPPING_ADDRESS,
		payload: data,
	});

	localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = data => async dispatch => {
	// stores payment method into redux
	dispatch({
		type: SAVE_PAYMENT_METHOD,
		payload: data,
	});

	// stores payment method into localStorage
	localStorage.setItem('paymentMethod', JSON.stringify(data));
};

export const clearOrder = () => async dispatch => {
	dispatch({
		type: CLEAR_ORDER,
	});
};
