import {
	CREATE_PRODUCT,
	GET_PRODUCTS,
	DELETE_PRODUCT,
} from '../constants/productConstants';

const INITIAL_STATE = {
	products: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CREATE_PRODUCT:
			return {
				products: [...state.products, action.payload],
			};
		case GET_PRODUCTS:
			return {
				products: [...action.payload],
			};
		case DELETE_PRODUCT:
			console.log('in productReducer: ', action.payload._id);
			return {
				products: state.products.filter(
					p => p._id !== action.payload._id
				),
			};
		default:
			return state;
	}
};

export default productReducer;
