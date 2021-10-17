import { ADD_TO_CART, DELETE_FROM_CART } from '../constants/cartConstants';

let INITIAL_STATE = {
	cart: [],
};

if (localStorage.getItem('cart')) {
	INITIAL_STATE.cart = JSON.parse(localStorage.getItem('cart'));
} else {
	INITIAL_STATE.cart = [];
}

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				cart: [...action.payload],
			};
		case DELETE_FROM_CART:
			return {
				cart: [...action.payload],
			};
		default:
			return state;
	}
};

export default cartReducer;
