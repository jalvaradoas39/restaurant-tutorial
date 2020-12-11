import { CREATE_PRODUCT, GET_PRODUCTS } from '../constants/productConstants';

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
		default:
			return state;
	}
};

export default productReducer;
