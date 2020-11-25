import {
	SHOW_SUCCESS_MESSAGE,
	SHOW_ERROR_MESSAGE,
	CLEAR_MESSAGES,
} from '../constants/messageConstants';

const INITIAL_STATE = {
	successMsg: '',
	errorMsg: '',
};

const messsageReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SHOW_SUCCESS_MESSAGE:
			return {
				...state,
				successMsg: action.payload,
			};
		case SHOW_ERROR_MESSAGE:
			return {
				...state,
				errorMsg: action.payload,
			};
		case CLEAR_MESSAGES:
			return {
				successMsg: '',
				errorMsg: '',
			};
		default:
			return state;
	}
};

export default messsageReducer;
