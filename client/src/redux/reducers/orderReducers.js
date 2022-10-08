import {
	SAVE_SHIPPING_ADDRESS,
	SAVE_PAYMENT_METHOD,
} from '../constants/orderConstants';

const INITIAL_STATE = {
	shippingAddress: {},
	paymentMethod: '',
};

if (localStorage.getItem('shippingAddress')) {
	INITIAL_STATE.shippingAddress = JSON.parse(
		localStorage.getItem('shippingAddress')
	);
} else {
	INITIAL_STATE.shippingAddress = {};
}

const orderReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SAVE_SHIPPING_ADDRESS:
			return {
				...state,
				shippingAddress: action.payload,
			};
		case SAVE_PAYMENT_METHOD:
			return {
				...state,
				paymentMethod: action.payload,
			};
		default:
			return state;
	}
};

export default orderReducer;
